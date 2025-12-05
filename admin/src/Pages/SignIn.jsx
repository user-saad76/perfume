import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router";

// Zod schema for SignIn form
const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/admin-users/Admin-signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log("Login Response:", result);

      if (res.ok) {
        toast.success("Login successful!");
        if (result.token) localStorage.setItem("adminToken", result.token);
      } else {
        toast.error(result.message || "Invalid credentials");
      }
    } catch (err) {
      console.log("Login Error:", err);
      toast.error("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div className="container py-5" style={{ maxWidth: "450px" }}>
      <h2 className="text-center mb-4">Admin Sign In</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 border rounded shadow-sm bg-light"
      >
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            {...register("email")}
          />
          {errors.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              {...register("password")}
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && (
            <small className="text-danger">{errors.password.message}</small>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary w-100"
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>

      <div className="mt-3 text-center">
        <small>
          Don't have an account? <Link to="/sign-up">Sign Up</Link>
        </small>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}
