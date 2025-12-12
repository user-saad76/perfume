import mongoose from "mongoose";

const featuredCollectionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Collection title is required"],
      minlength: [2, "Collection title must be at least 2 characters"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [2, "Name must be at least 2 characters"],
    },
    brand: {
      type: String,
      required: [true, "Brand is required"],
      minlength: [2, "Brand must be at least 2 characters"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      minlength: [2, "Category must be at least 2 characters"],
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      minlength: [2, "Slug must be at least 2 characters"],
      unique: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price must be greater than 0"],
    },
    discountPrice: {
      type: Number,
      default: 0,
      validate: {
        validator: function (v) {
          // Discount should not be greater than price
          return v <= this.price;
        },
        message: "Discount price cannot be greater than original price",
      },
    },
    stock: {
      type: Number,
      required: [true, "Stock is required"],
      min: [0, "Stock cannot be negative"],
    },
    rating: {
      type: Number,
      min: [1, "Rating must be at least 1"],
      max: [5, "Rating cannot exceed 5"],
      default: 1,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: [10, "Description must be at least 10 characters"],
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      required: [true, "Status is required"],
      default: "active",
    },
    image: {
      type: {
         public_id:String,
        secure_url:String
       }, 
       required: true,
    },
  },
  { timestamps: true }
);

const FeaturedCollection = mongoose.model(
  "FeaturedCollection",
  featuredCollectionSchema
);

export default FeaturedCollection;
