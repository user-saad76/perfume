import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ================= ZOD SCHEMA =================
const collectionSchema = z
  .object({
    name: z.string().min(2, "Collection name is required"),
    type: z.enum(["Men", "Women", "Tester", "Attar"], "Select a valid type"),  
    slug: z.string().min(2, "Slug is required"),
    status: z.enum(["Active", "Inactive"], "Select status"),
    image: z.any().optional(),
  })
  .refine(
    (data) =>
      !data.discountPrice ||
      Number(data.discountPrice) <= Number(data.price),
    {
      message: "Discount price cannot be greater than original price",
      path: ["discountPrice"],
    }
  );

// ================= COMPONENT =================
function AddSecondMoreCollection() {
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(collectionSchema),
  });

  // ---------- SUBMIT ----------
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      Object.keys(data).forEach((key) => {
        if (key !== "image") formData.append(key, data[key]);
      });

      const fileInput = document.querySelector("input[type='file']");
      if (fileInput && fileInput.files[0]) {
        formData.append("image", fileInput.files[0]);
      }

      setLoading(true);

      const res = await fetch(
        "http://localhost:5000/secondmore-collections/create",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await res.json();

      if (res.ok) {
        toast.success("Collection added successfully!");
      } else {
        toast.error(result.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("POST Error:", error);
      toast.error("Something went wrong!");
    }

    setLoading(false);
  };

  // ---------- SLUG ----------
  const handleSlug = (e) => {
    const slugValue = e.target.value.toLowerCase().replace(/\s+/g, "-");
    setValue("slug", slugValue);
  };

  // ---------- IMAGE ----------
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Add Collection</h2>

      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto p-4 border rounded shadow-sm bg-light"
        style={{ maxWidth: "600px" }}
      >
        {/* Collection Name */}
        <div className="mb-3">
          <label className="form-label">Collection Name</label>
          <input
            type="text"
            className="form-control"
            {...register("name")}
            onChange={handleSlug}
          />
          {errors.name && (
            <small className="text-danger">{errors.name.message}</small>
          )}
        </div>

        {/* Slug */}
        <div className="mb-3">
          <label className="form-label">Slug</label>
          <input
            type="text"
            className="form-control"
            {...register("slug")}
            readOnly
          />
          {errors.slug && (
            <small className="text-danger">{errors.slug.message}</small>
          )}
        </div>

        {/* Type */}
        <div className="mb-3">
          <label className="form-label">Type</label>
          <select className="form-select" {...register("type")}>
            <option value="">Select Type</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Tester">Tester</option>
            <option value="Attar">Attar</option>
          </select>
          {errors.type && (
            <small className="text-danger">{errors.type.message}</small>
          )}
        </div>

        {/* Image */}
        <div className="mb-3">
          <label className="form-label">Collection Image</label>
          <input
            type="file"
            className="form-control"
            {...register("image")}
            onChange={handleImageChange}
          />
          {preview && (
            <div className="text-center mt-3">
              <img
                src={preview}
                alt="Preview"
                width="150"
                height="150"
                className="rounded shadow"
              />
            </div>
          )}
        </div>

        {/* Status */}
        <div className="mb-3">
          <label className="form-label">Status</label>
          <select className="form-select" {...register("status")}>
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          {errors.status && (
            <small className="text-danger">{errors.status.message}</small>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary w-100"
        >
          {loading ? "Saving..." : "Add Collection"}
        </button>
      </form>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default AddSecondMoreCollection;
