import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";

// ✅ Zod Schema with all fields
const featuredSchema = z
  .object({
    title: z.string().min(2, "Collection title is required"),
    name: z.string().min(2, "Name is required"),
    brand: z.string().min(2, "Brand is required"),
    category: z.string().min(2, "Category is required"),
    slug: z.string().min(2, "Slug is required"),
    price: z
      .string()
      .refine((v) => !isNaN(v) && Number(v) > 0, "Enter valid price"),
    discountPrice: z
      .string()
      .refine((v) => v === "" || (!isNaN(v) && Number(v) >= 0), "Enter valid discount price")
      .optional(),
    stock: z
      .string()
      .refine((v) => !isNaN(v) && Number(v) >= 0, "Enter valid stock"),
    rating: z
      .string()
      .refine((v) => !isNaN(v) && Number(v) >= 1 && Number(v) <= 5, "Rating must be between 1 and 5"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    status: z.enum(["active", "inactive"], { required_error: "Status is required" }),
    image: z.any().optional(),
  })
  .refine(
    (data) => !data.discountPrice || Number(data.discountPrice) <= Number(data.price),
    { message: "Discount price cannot be greater than original price", path: ["discountPrice"] }
  );

function AddFeaturedCollection() {
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: zodResolver(featuredSchema),
  });

  // ✅ Auto slug generator
  const handleSlug = (e) => {
    const val = e.target.value;
    const slugValue = val.toLowerCase().replace(/\s+/g, "-");
    setValue("slug", slugValue);
  };

  // ✅ Image preview
  const handleImg = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  const onSubmit = async(data) => {
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
  
        const res = await fetch("http://localhost:5000/featured-collection/create", {
          method: "POST",
          body: formData,
        });
  
        const result = await res.json();
        console.log("Server Response:", result);
  
        if (res.ok) {
          toast.success("Perfume added successfully!");
        } else {
          toast.error(result.message || "Something went wrong!");
        }
      } catch (error) {
        console.error("POST Error:", error);
        toast.error("Something went wrong!");
      }
  
      setLoading(false);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Add Featured Collection</h2>

      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto p-4 border rounded shadow-sm bg-light"
        style={{ maxWidth: "650px" }}
      >
        {/* Title */}
        <div className="mb-3">
          <label className="form-label">Collection Title</label>
          <input type="text" className="form-control" {...register("title")} />
          {errors.title && <small className="text-danger">{errors.title.message}</small>}
        </div>

        {/* Name */}
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" {...register("name")} onChange={handleSlug} />
          {errors.name && <small className="text-danger">{errors.name.message}</small>}
        </div>

        {/* Slug */}
        <div className="mb-3">
          <label className="form-label">Slug</label>
          <input type="text" className="form-control" {...register("slug")} readOnly />
          {errors.slug && <small className="text-danger">{errors.slug.message}</small>}
        </div>

        {/* Brand */}
        <div className="mb-3">
          <label className="form-label">Brand</label>
          <input type="text" className="form-control" {...register("brand")} />
          {errors.brand && <small className="text-danger">{errors.brand.message}</small>}
        </div>

        {/* Category */}
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input type="text" className="form-control" {...register("category")} />
          {errors.category && <small className="text-danger">{errors.category.message}</small>}
        </div>

        {/* Price */}
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input type="text" className="form-control" {...register("price")} />
          {errors.price && <small className="text-danger">{errors.price.message}</small>}
        </div>

        {/* Discount Price */}
        <div className="mb-3">
          <label className="form-label">Discount Price</label>
          <input type="text" className="form-control" {...register("discountPrice")} />
          {errors.discountPrice && <small className="text-danger">{errors.discountPrice.message}</small>}
        </div>

        {/* Rating */}
        <div className="mb-3">
          <label className="form-label">Rating (1-5)</label>
          <input type="number" className="form-control" min="1" max="5" step="0.1" {...register("rating")} />
          {errors.rating && <small className="text-danger">{errors.rating.message}</small>}
        </div>

        {/* Stock */}
        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input type="text" className="form-control" {...register("stock")} />
          {errors.stock && <small className="text-danger">{errors.stock.message}</small>}
        </div>

        {/* Description */}
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea rows="3" className="form-control" {...register("description")}></textarea>
          {errors.description && <small className="text-danger">{errors.description.message}</small>}
        </div>

        {/* Status */}
        <div className="mb-3">
          <label className="form-label">Status</label>
          <select className="form-select" {...register("status")}>
            <option value="">Select Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          {errors.status && <small className="text-danger">{errors.status.message}</small>}
        </div>

        {/* Image */}
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input type="file" accept="image/*" className="form-control" {...register("image")} onChange={handleImg} />
          {preview && <div className="text-center mt-3"><img src={preview} width="150" className="rounded shadow" alt="preview" /></div>}
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Validating..." : "Submit"}
        </button>
      </form>

      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default AddFeaturedCollection;
