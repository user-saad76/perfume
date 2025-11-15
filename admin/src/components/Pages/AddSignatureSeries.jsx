import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
        (val) =>
          !isNaN(val) &&
          Number(val) >= 1 &&
          Number(val) <= 5,
        "Rating must be between 1 and 5"
      ),
  })
  .refine((data) => {
    if (data.discountPrice && Number(data.discountPrice) > Number(data.price)) {
      return false;
    }
    return true;
  }, {
    message: "Discount price cannot be greater than original price",
    path: ["discountPrice"],
  });

function AddSignatureSeries() {
  const [preview, setPreview] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(perfumeSchema),
  });

 const onSubmit = async (data) => {
  try {
    const formData = new FormData();

    // Add all fields
    Object.keys(data).forEach((key) => {
      if (key !== "image") {
        formData.append(key, data[key]);
      }
    });

    // Add image file
    const fileInput = document.querySelector("input[type='file']");
    if (fileInput && fileInput.files[0]) {
      formData.append("image", fileInput.files[0]);
    }

    const res = await fetch("http://localhost:5000/signature-series/create", {
      method: "POST",
      body: formData, // NO JSON, NO headers
    });

    const result = await res.json();
    console.log("Server Response:", result);

    if (res.ok) {
      alert("Perfume added successfully!");
    } else {
      alert("Error: " + result.message);
    }
  } catch (error) {
    console.error("POST Error:", error);
    alert("Something went wrong");
  }
};



  // Auto-generate slug
  const handleSlug = (e) => {
    const nameValue = e.target.value;
    const slugValue = nameValue.toLowerCase().replace(/\s+/g, "-");
    setValue("slug", slugValue);
  };

  // Image preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Add SignatureSeries</h2>

      <form encType="multipart/form-data"
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto p-4 border rounded shadow-sm bg-light"
        style={{ maxWidth: "600px" }}
        
      >
        {/* Perfume Name */}
        <div className="mb-3">
          <label className="form-label">Perfume Name</label>
          <input
            type="text"
            className="form-control"
            {...register("name")}
            onChange={handleSlug}
          />
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
          {errors.category && (
            <small className="text-danger">{errors.category.message}</small>
          )}
        </div>

        {/* Price */}
        <div className="mb-3">
          <label className="form-label">Price (PKR)</label>
          <input type="text" className="form-control" {...register("price")} />
          {errors.price && <small className="text-danger">{errors.price.message}</small>}
        </div>

        {/* Discount Price */}
        <div className="mb-3">
          <label className="form-label">Discount Price (PKR)</label>
          <input type="text" className="form-control" {...register("discountPrice")} />
          {errors.discountPrice && (
            <small className="text-danger">{errors.discountPrice.message}</small>
          )}
        </div>

        {/* Rating */}
        <div className="mb-3">
          <label className="form-label">Rating (1 to 5)</label>
          <input
            type="number"
            min="1"
            max="5"
            step="0.1"
            className="form-control"
            {...register("rating")}
          />
          {errors.rating && (
            <small className="text-danger">{errors.rating.message}</small>
          )}
        </div>

        {/* Stock */}
        <div className="mb-3">
          <label className="form-label">Stock Quantity</label>
          <input type="text" className="form-control" {...register("stock")} />
          {errors.stock && <small className="text-danger">{errors.stock.message}</small>}
        </div>

        {/* Description */}
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="3"
            {...register("description")}
          ></textarea>
          {errors.description && (
            <small className="text-danger">{errors.description.message}</small>
          )}
        </div>

        {/* Image Upload */}
        <div className="mb-3">
          <label className="form-label">Perfume Image</label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            {...register("image")}
            onChange={handleImageChange}
          />
          {errors.image && <small className="text-danger">{errors.image.message}</small>}

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

        <button type="submit" className="btn btn-primary w-100">
          Add Perfume
        </button>
      </form>
    </div>
  );
}

export default AddSignatureSeries;
