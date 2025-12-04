import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "bootstrap/dist/css/bootstrap.min.css";
import { usePost } from "../../../client/src/hooks/usePost";

// Zod Schema
const signupSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email"),
  phone: z
    .string()
    .min(11, "Phone number must be 11 digits")
    .max(11, "Phone number must be 11 digits"),
  address: z.string().min(5, "Address is required"),
  cnic: z
    .string()
    .min(13, "CNIC must be 13 digits")
    .max(13, "CNIC must be 13 digits"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
  image: z
    .any()
    .refine((file) => file?.length === 1, "Please upload one image")
    .refine(
      (file) => file?.[0]?.size <= 2 * 1024 * 1024,
      "Max image size is 2MB"
    ),
});

export default function SignUpWithImage() {
  const [preview, setPreview] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
   const { postData, response, error, loading } = usePost(
      "http://localhost:5000/admin-users/Admin-signup"
    );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const imageFile = watch("image");

 const onSubmit = async (data) => {
    console.log("SUBMIT ADMIN SIGN-UP",data);
    
  const formData = new FormData();
  formData.append("fullName", data.fullName);
  formData.append("email", data.email);
  formData.append("phone", data.phone);
  formData.append("address", data.address);
  formData.append("cnic", data.cnic);
  formData.append("password", data.password);

   if (imageFile) {
    formData.append("image", imageFile); // Must match multer field name
  } else {
    alert("Image is required");
    return;
  }

  await postData(formData);
};

  // Preview Image
  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "500px" }}>
      <div className="card shadow-sm">
        <div className="card-body">
          <h4 className="mb-3">Create Account</h4>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Full Name */}
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
                {...register("fullName")}
              />
              {errors.fullName && (
                <div className="invalid-feedback">{errors.fullName.message}</div>
              )}
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                {...register("email")}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>

            {/* Phone Number */}
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                {...register("phone")}
              />
              {errors.phone && (
                <div className="invalid-feedback">{errors.phone.message}</div>
              )}
            </div>

            {/* Address */}
            <div className="mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                className={`form-control ${errors.address ? "is-invalid" : ""}`}
                {...register("address")}
              />
              {errors.address && (
                <div className="invalid-feedback">{errors.address.message}</div>
              )}
            </div>

            {/* CNIC */}
            <div className="mb-3">
              <label className="form-label">CNIC</label>
              <input
                type="text"
                className={`form-control ${errors.cnic ? "is-invalid" : ""}`}
                {...register("cnic")}
              />
              {errors.cnic && (
                <div className="invalid-feedback">{errors.cnic.message}</div>
              )}
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label">Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className={`form-control ${errors.password ? "is-invalid" : ""}`}
                  {...register("password")}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
                {errors.password && (
                  <div className="invalid-feedback d-block">
                    {errors.password.message}
                  </div>
                )}
              </div>
            </div>

            {/* Confirm Password */}
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <div className="input-group">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                  {...register("confirmPassword")}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
                {errors.confirmPassword && (
                  <div className="invalid-feedback d-block">
                    {errors.confirmPassword.message}
                  </div>
                )}
              </div>
            </div>

            {/* Image Upload */}
            <div className="mb-3">
              <label className="form-label">Profile Image</label>
              <input
                type="file"
                accept="image/*"
                className={`form-control ${errors.image ? "is-invalid" : ""}`}
                {...register("image")}
                onChange={handleImagePreview}
              />
              {errors.image && (
                <div className="invalid-feedback">{errors.image.message}</div>
              )}

              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="img-thumbnail mt-2"
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
              )}
            </div>

            <button className="btn btn-primary w-100" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
