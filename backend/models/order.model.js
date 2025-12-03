import mongoose from "mongoose";

// Cart Item Schema
const cartItemSchema = new mongoose.Schema({
 // productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

// Main Order Schema
const orderSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      minlength: 2,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 15,
    },

    address: {
      type: String,
      required: true,
      minlength: 5,
    },

    city: {
      type: String,
      required: true,
      minlength: 2,
    },

    postalCode: {
      type: String,
      required: true,
      minlength: 3,
    },

    paymentMethod: {
      type: String,
      enum: ["Cash on Delivery"],
      default: "Cash on Delivery",
    },

    cartItems: [cartItemSchema], // User Cart Items

    shippingCost: {
      type: Number,
      required: true,
      default: 500,
    },

    totalAmount: {
      type: Number,
      required: true,
    },

    orderStatus: {
      type: String,
      enum: ["Pending", "Confirmed", "Shipped", "Delivered"],
      default: "Pending",
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
