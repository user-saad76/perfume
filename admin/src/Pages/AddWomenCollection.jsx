import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// 👉 Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ================= ZOD SCHEMA =================
const perfumeSchema = z
  .object({
    name: z.string().min(2, "Perfume name is required"),
    brand: z.string().min(2, "Brand is required"),
    price: z
      .string()
      .refine((val) => !isNaN(val) && Number(val) > 0, "Enter valid price"),
    discountPrice: z
      .string()
      .refine(
        (val) => val === "" || (!isNaN(val) && Number(val) >= 0),
        "Enter valid discount price"
      )
      .optional(),
    category: z.string().min(2, "Category is required"),
    slug: z.string().min(2, "Slug is required"),
    description: z
      .string()
      .min(10, "Description should be at least 10 characters"),
    stock: z
      .string()
      .refine(
        (val) => !isNaN(val) && Number(val) >= 0,
        "Enter valid stock number"
      ),
    image: z.any().optional(),
    rating: z
      .string()
      .refine(
        (val) => !isNaN(val) && Number(val) >= 1 && Number(val) <= 5,
        "Rating must be between 1 and 5"
      ),
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
function AddWomenCollection() {
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(perfumeSchema),
  });

  // ===== SUBMIT =====
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      Object.keys(data).forEach((key) => {
        if (key !== "image") {
          formData.append(key, data[key]);
        }
      });

      const fileInput = document.querySelector("input[type='file']");
      if (fileInput && fileInput.files[0]) {
        formData.append("image", fileInput.files[0]);
      }

      setLoading(true);

      const res = await fetch(
        "http://localhost:5000/women-collections/create",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await res.json();

      if (res.ok) {
        toast.success("Women perfume added successfully!");
      } else {
        toast.error(result.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }

    setLoading(false);
  };

  // ===== SLUG =====
  const handleSlug = (e) => {
    const slugValue = e.target.value.toLowerCase().replace(/\s+/g, "-");
    setValue("slug", slugValue);
  };

  // ===== IMAGE PREVIEW =====
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Add Women Collection</h2>

      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto p-4 border rounded shadow-sm bg-light"
        style={{ maxWidth: "600px" }}
      >
        {/* Name */}
        <div className="mb-3">
          <label className="form-label">Perfume Name</label>
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
        </div>

        {/* Brand */}
        <div className="mb-3">
          <label className="form-label">Brand</label>
          <input className="form-control" {...register("brand")} />
        </div>

        {/* Category */}
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input className="form-control" {...register("category")} />
        </div>

        {/* Price */}
        <div className="mb-3">
          <label className="form-label">Price (PKR)</label>
          <input className="form-control" {...register("price")} />
        </div>

        {/* Discount */}
        <div className="mb-3">
          <label className="form-label">Discount Price</label>
          <input className="form-control" {...register("discountPrice")} />
        </div>

        {/* Rating */}
        <div className="mb-3">
          <label className="form-label">Rating (1–5)</label>
          <input
            type="number"
            min="1"
            max="5"
            step="0.1"
            className="form-control"
            {...register("rating")}
          />
        </div>

        {/* Stock */}
        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input className="form-control" {...register("stock")} />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="3"
            {...register("description")}
          />
        </div>

        {/* Image */}
        <div className="mb-3">
          <label className="form-label">Perfume Image</label>
          <input
            type="file"
            className="form-control"
            {...register("image")}
            onChange={handleImageChange}
          />
        </div>

        {preview && (
          <div className="text-center mb-3">
            <img
              src={preview}
              alt="Preview"
              width="150"
              height="150"
              className="rounded shadow"
            />
          </div>
        )}

        <button className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Saving..." : "Add Women Perfume"}
        </button>
      </form>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default AddWomenCollection;
