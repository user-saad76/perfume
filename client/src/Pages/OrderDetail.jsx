import React from "react";

function OrderDetail() {
  return (
    <div className="bg-light vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow-lg p-5 text-center" style={{ maxWidth: "500px", borderRadius: "1rem" }}>
        {/* Success Icon */}
        <div className="mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="green"
            className="bi bi-check-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 11.03a.75.75 0 0 0 1.08 0l3.992-3.992a.75.75 0 0 0-1.08-1.08L7.5 9.439 5.992 7.93a.75.75 0 1 0-1.08 1.08l2.06 2.02z"/>
          </svg>
        </div>

        {/* Success Message */}
        <h2 className="mb-3 text-success fw-bold">Order Delivered!</h2>
        <p className="mb-4 text-muted">
          🎉 Your order has been delivered successfully. Thank you for shopping with us!
        </p>

        {/* Optional Button */}
        <a href="/" className="btn btn-success btn-lg w-100">
          Continue Shopping
        </a>
      </div>
    </div>
  );
}

export default OrderDetail;
