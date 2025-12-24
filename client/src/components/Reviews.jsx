import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import "bootstrap/dist/css/bootstrap.min.css";

// Zod validation schema
const feedbackSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  comment: z.string().min(5, "Comment must be at least 5 characters"),
});

const Review = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(feedbackSchema),
  });

  const onSubmit = (data) => {
    console.log("Feedback Submitted:", data);
    alert("Thank you for your feedback!");
    reset();
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Card */}
          <div className="card shadow-lg rounded-4 border-0">
            <div className="card-body p-5">
              <h2 className="card-title text-center mb-4 fw-bold">
                Customer Feedback
              </h2>

              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name Field */}
                <div className="form-floating mb-4">
                  <input
                    type="text"
                    id="name"
                    className={`form-control rounded-3 ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    placeholder="Your Name"
                    {...register("name")}
                  />
                  <label htmlFor="name">Name</label>
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name.message}</div>
                  )}
                </div>

                {/* Comment Field */}
                <div className="form-floating mb-4">
                  <textarea
                    id="comment"
                    className={`form-control rounded-3 ${
                      errors.comment ? "is-invalid" : ""
                    }`}
                    placeholder="Your Comment"
                    style={{ height: "150px" }}
                    {...register("comment")}
                  ></textarea>
                  <label htmlFor="comment">Comment</label>
                  {errors.comment && (
                    <div className="invalid-feedback">{errors.comment.message}</div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-lg rounded-3"
                    style={{
                      background: "linear-gradient(90deg, #4e54c8, #8f94fb)",
                      border: "none",
                      color: "#fff",
                    }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Feedback"}
                  </button>
                </div>
              </form>
            </div>

            {/* Card Footer */}
            <div className="card-footer text-center text-muted">
              We value your feedback!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
