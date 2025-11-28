import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router";
import { usePost } from "../hooks/usePost";
import { useAuth } from "../contexts/authProvider";
import { Navigate } from "react-router";

// Zod validation schema
const SignInSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
  remember: z.boolean().optional(),
});


export default function SignIn() {


   const {user,error:userError,loading:loadingError} = useAuth();
 //  if(userLoading) return <p>Loading.....</p>
   if(user && user.name) return <Navigate to ='/'/>




  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      remember: false,
    },
  });
  const navigate =  useNavigate();

  const { postData, response, error, loading } = usePost(
    "http://localhost:5000/users/signin"
  );

  const onSubmit = async (data) => {
    setServerError("");

    try {
      console.log("Form Data:", data);
      await postData(data);
     // navigate('/');
      window.location.href = '/'

      alert("Signed in successfully (demo)");
    } catch (err) {
      setServerError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container py-4" style={{ maxWidth: "500px" }}>
      <div className="card shadow-sm">
        <div className="card-body">
          <h4 className="mb-3">Sign In</h4>

          {serverError && <div className="alert alert-danger">{serverError}</div>}

          <form onSubmit={handleSubmit(onSubmit)} noValidate>

            {/* Name */}
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                placeholder="Enter your name"
                {...register("name")}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name.message}</div>
              )}
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                placeholder="you@example.com"
                {...register("email")}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label">Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className={`form-control ${errors.password ? "is-invalid" : ""}`}
                  placeholder="Enter your password"
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
                <div className="text-danger small mt-1">
                  {errors.password.message}
                </div>
              )}
            </div>

            {/* Remember me */}
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                {...register("remember")}
              />
              <label className="form-check-label">Remember me</label>
            </div>

            {/* Submit */}
            <button
              className="btn btn-primary w-100"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="text-center mt-3">
            <small>
              Don't have an account? <Link to ="/sign-up">Register</Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
