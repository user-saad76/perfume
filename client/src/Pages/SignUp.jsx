import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePost } from "../hooks/usePost";

/**
 * Zod schema
 * - name, email, phone, password, confirmPassword, acceptTerms
 * - password/confirmPassword refinement to ensure match
 */
const signUpSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Enter a valid email address"),
    phone: z
      .string()
      .optional()
      .transform((v) => v || "")
      .refine((v) => v === "" || /^[0-9]{7,15}$/.test(v), {
        message: "Phone must contain 7–15 digits (numbers only)",
      }),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    acceptTerms: z.literal(true, {
      errorMap: () => ({ message: "You must accept the terms and conditions" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

   const {postData,response,error,loading} = usePost('http://localhost:5000/users/signup');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  const onSubmit = async (data) => {
    // remove confirmPassword before sending to backend
    const { confirmPassword, ...payload } = data;

    // simulate submission
    try {
      console.log("Submitting:", payload);
      await postData(data)
      // e.g. await api.post("/signup", payload)
      // show success, then reset form
      reset();
      alert("Signup successful (demo). Check console for payload.");
    } catch (err) {
      console.error("Signup error:", err);
      alert("There was an error. See console.");
    }
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h3 className="card-title mb-3 text-center">Create an account</h3>

              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Name */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    placeholder="John Doe"
                    aria-invalid={errors.name ? "true" : "false"}
                    {...register("name")}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name.message}</div>
                  )}
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    placeholder="you@example.com"
                    aria-invalid={errors.email ? "true" : "false"}
                    {...register("email")}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email.message}</div>
                  )}
                </div>

                {/* Phone */}
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                    placeholder="03331234567"
                    aria-invalid={errors.phone ? "true" : "false"}
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <div className="invalid-feedback">{errors.phone.message}</div>
                  )}
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <div className="input-group">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      className={`form-control ${errors.password ? "is-invalid" : ""}`}
                      aria-invalid={errors.password ? "true" : "false"}
                      placeholder="At least 8 characters"
                      {...register("password")}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => setShowPassword((s) => !s)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                    {errors.password && (
                      <div className="invalid-feedback d-block">{errors.password.message}</div>
                    )}
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    className={`form-control ${
                      errors.confirmPassword ? "is-invalid" : ""
                    }`}
                    aria-invalid={errors.confirmPassword ? "true" : "false"}
                    {...register("confirmPassword")}
                  />
                  {errors.confirmPassword && (
                    <div className="invalid-feedback">{errors.confirmPassword.message}</div>
                  )}
                </div>

                {/* Terms */}
                <div className="mb-3 form-check">
                  <input
                    id="acceptTerms"
                    type="checkbox"
                    className={`form-check-input ${errors.acceptTerms ? "is-invalid" : ""}`}
                    {...register("acceptTerms")}
                    aria-invalid={errors.acceptTerms ? "true" : "false"}
                  />
                  <label htmlFor="acceptTerms" className="form-check-label">
                    I agree to the <a href="/terms">terms and conditions</a>
                  </label>
                  {errors.acceptTerms && (
                    <div className="invalid-feedback d-block">{errors.acceptTerms.message}</div>
                  )}
                </div>

                {/* Submit */}
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Creating account..." : "Sign up"}
                  </button>
                </div>

                {/* Small footer */}
                <p className="text-center mt-3 mb-0 small text-muted">
                  Already have an account? <a href="/login">Sign in</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
