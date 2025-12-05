import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";

// Zod Schema
const adminSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(11, "Must be 11 digits").max(11, "Must be 11 digits"),
  address: z.string().min(5, "Address is required"),
  cnic: z.string().min(13, "Must be 13 digits").max(13, "Must be 13 digits"),
  password: z.string().min(6, "Min 6 characters"),
  confirmPassword: z.string(),
  image: z.any().optional(),
}).refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  }
);

export default function AdminSignup() {
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(adminSchema),
  });

  const imageFile = watch("image");

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      Object.keys(data).forEach((key) => {
        if (key !== "image") {
          formData.append(key, data[key]);
        }
      });

      if (imageFile && imageFile.length > 0) {
        formData.append("image", imageFile[0]); // FIXED
      } else {
        toast.error("Image is required");
        return;
      }

      setLoading(true);

      const res = await fetch("http://localhost:5000/admin-users/Admin-signup", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      console.log("Server Response:", result);

      if (res.ok) {
        toast.success("Admin created successfully!");
      } else {
        toast.error(result.message || "Something went wrong!");
      }
    } catch (err) {
      console.log("Error:", err);
      toast.error("Something went wrong!");
    }

    setLoading(false);
  };

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Admin Signup</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto p-4 border rounded shadow-sm bg-light"
        style={{ maxWidth: "600px" }}
        encType="multipart/form-data"
      >
        {/* Full Name */}
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            {...register("fullName")}
          />
          {errors.fullName && (
            <small className="text-danger">{errors.fullName.message}</small>
          )}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" {...register("email")} />
          {errors.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}
        </div>

        {/* Phone */}
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input type="text" className="form-control" {...register("phone")} />
          {errors.phone && (
            <small className="text-danger">{errors.phone.message}</small>
          )}
        </div>

        {/* Address */}
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            {...register("address")}
          />
          {errors.address && (
            <small className="text-danger">{errors.address.message}</small>
          )}
        </div>

        {/* CNIC */}
        <div className="mb-3">
          <label className="form-label">CNIC</label>
          <input type="text" className="form-control" {...register("cnic")} />
          {errors.cnic && (
            <small className="text-danger">{errors.cnic.message}</small>
          )}
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            {...register("password")}
          />
          {errors.password && (
            <small className="text-danger">{errors.password.message}</small>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <small className="text-danger">
              {errors.confirmPassword.message}
            </small>
          )}
        </div>

        {/* Image Upload */}
        <div className="mb-3">
          <label className="form-label">Profile Image</label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            {...register("image")}
            onChange={handleImagePreview}
          />
          {errors.image && (
            <small className="text-danger">{errors.image.message}</small>
          )}

          {preview && (
            <div className="text-center mt-3">
              <img
                src={preview}
                alt="Preview"
                className="rounded shadow"
                width="150"
                height="150"
              />
            </div>
          )}
        </div>

        <button className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Creating..." : "Create Admin"}
        </button>
      </form>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}
