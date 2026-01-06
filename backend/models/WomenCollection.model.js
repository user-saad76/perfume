import mongoose from "mongoose";

const womenCollectionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },

    brand: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    discountPrice: {
      type: Number,
      default: 0,
      min: 0,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    description: {
      type: String,
      required: true,
      minlength: 10,
    },

    stock: {
      type: Number,
      required: true,
      min: 0,
    },

    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },

    image: {
      public_id: {
        type: String,
      },
      secure_url: {
        type: String,
      },
    },
  },
  {
    timestamps: true, // createdAt & updatedAt
  }
);

// 🔒 Discount validation
womenCollectionSchema.pre("save", function (next) {
  if (this.discountPrice > this.price) {
    next(new Error("Discount price cannot be greater than original price"));
  }
  next();
});

const WomenCollection = mongoose.model(
  "WomenCollection",
  womenCollectionSchema
);

export default WomenCollection;
