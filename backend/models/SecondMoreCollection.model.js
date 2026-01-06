import mongoose from "mongoose";

const secondMoreCollectionSchema = new mongoose.Schema(
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

   

    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },

    image: {
      public_id: {
        type: String,
        required: [true, "Image public_id is required"],
      },
      secure_url: {
        type: String,
        required: [true, "Image URL is required"],
      },
    },
  },
  {
    timestamps: true,
  }
);

const SecondMoreCollection = mongoose.model(
  "SecondMoreCollection",
  secondMoreCollectionSchema
);

export default SecondMoreCollection;
