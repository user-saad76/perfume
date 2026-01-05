import mongoose from "mongoose";

const menCollectionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Perfume name is required"],
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
      required: [true, "Brand is required"],
      trim: true,
      minlength: 2,
    },

    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: 1,
    },

    discountPrice: {
      type: Number,
      default: 0,
      validate: {
        validator: function (value) {
          return value <= this.price;
        },
        message: "Discount price cannot be greater than original price",
      },
    },

    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },

    stock: {
      type: Number,
      required: true,
      min: 0,
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
       }, 
       required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("MenCollection", menCollectionSchema);
