import mongoose from "mongoose";

const moreCollectionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Collection name is required"],
      trim: true,
      minlength: [2, "Collection name must be at least 2 characters"],
    },
    type: {
      type: String,
      enum: ["Men", "Women", "Tester", "Attar"],
      required: [true, "Collection type is required"],
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: [10, "Description must be at least 10 characters"],
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price must be positive"],
    },
    discountPrice: {
      type: Number,
      min: [0, "Discount price cannot be negative"],
      validate: {
        validator: function (val) {
          // Ensure discountPrice <= price
          return val <= this.price;
        },
        message: "Discount price cannot be greater than original price",
      },
    },
    stock: {
      type: Number,
      default: 0,
      min: [0, "Stock cannot be negative"],
    },
    rating: {
      type: Number,
      min: [1, "Rating must be at least 1"],
      max: [5, "Rating cannot be more than 5"],
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
    image: {
     type: {
         public_id:String,
        secure_url:String
       }, 
       required: true,
    },
  },
  {
    timestamps: true, // automatically add createdAt and updatedAt
  }
);

const MoreCollection = mongoose.model("MoreCollection", moreCollectionSchema);
export default MoreCollection;
