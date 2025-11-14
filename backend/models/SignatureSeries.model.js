import mongoose from "mongoose";

const SignatureSeriesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
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

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
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

    description: {
      type: String,
      required: true,
      minlength: 10,
    },

    stock: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },

    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },

     image: {
       type: {
         public_id:String,
        secure_url:String
       }, // You can store image URL/path here
       required: true,
     },
  },
  { timestamps: true } // automatically adds createdAt and updatedAt
);

const SignatureSeries = mongoose.model("SignatureSeries", SignatureSeriesSchema);

export default SignatureSeries;
