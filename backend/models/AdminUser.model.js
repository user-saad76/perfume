import mongoose from "mongoose";

const AdminUserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      minlength: [2, "Full name must be at least 2 characters"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^[0-9]{11}$/, "Phone number must be exactly 11 digits"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
      minlength: [5, "Address must be at least 5 characters"],
      trim: true,
    },
    cnic: {
      type: String,
      required: [true, "CNIC is required"],
      match: [/^[0-9]{13}$/, "CNIC must be exactly 13 digits"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
    image: {
      type: String, // store image URL or path
      required: [true, "Profile image is required"],
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

const AdminUser = mongoose.model("AdminUser", AdminUserSchema);

export default AdminUser;
