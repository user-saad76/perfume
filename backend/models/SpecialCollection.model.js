import mongoose from "mongoose";

const specialCollectionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    brand: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
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
      validate: {
        validator: function (value) {
          return value <= this.price;
        },
        message: "Discount price cannot be greater than price",
      },
    },

    stock: {
      type: Number,
      required: true,
      min: 0,
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    description: {
      type: String,
      required: true,
      minlength: 10,
    },

    image: {
       type: {
         public_id:String,
        secure_url:String
       }, // You can store image URL/path here
       required: true,
     },
  },
  {
    timestamps: true, // createdAt & updatedAt
  }
);

export default mongoose.model(
  "SpecialCollection",
  specialCollectionSchema
);
