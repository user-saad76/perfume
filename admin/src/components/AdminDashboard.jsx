import React from "react";
import adminPic from "../assets/testimonial-2.jpg";
function AdminProfile() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4 text-center" style={{ width: "350px" }}>
        <img
          src={adminPic}
          alt="Admin"
          className="rounded-circle mx-auto mb-3"
          width="120"
          height="120"
        />
        <h4 className="mb-0">Saad Khan</h4>
        <p className="text-muted">Administrator</p>
        <hr />
        <p><strong>Email:</strong> saad@example.com</p>
        <p><strong>Phone:</strong> +92 300 1234567</p>
        <p><strong>Location:</strong> Islamabad, Pakistan</p>
        <button className="btn btn-primary w-100 mt-3">Edit Profile</button>
      </div>
    </div>
  );
}

export default AdminProfile;
