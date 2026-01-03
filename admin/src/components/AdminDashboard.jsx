import React from "react";
import { useAdmin } from "../contexts/AdminAuthProvider";
import { Navigate } from "react-router";

function AdminProfile() {
  const { admin, error, loading } = useAdmin();
  console.log("admin-profile", admin);

  if (loading) {
    return (
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <h4>Loading...</h4>
      </div>
    );
  }

  if (error || !admin) {
    return (
       <Navigate to="/sign-in" />
    );
  }
 

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4 text-center" style={{ width: "350px" }}>
        <img
          src={admin?.image?.secure_url}
          alt="Admin"
          className="rounded-circle mx-auto mb-3"
          width="120"
          height="120"
        />

        <h4 className="mb-0">{admin.fullName}</h4>
        <p className="text-muted">Administrator</p>

        <hr />

        <p><strong>Email:</strong> {admin.email}</p>
        <p><strong>Phone:</strong> {admin.phone}</p>
        <p><strong>Location:</strong> {admin.address}</p>
      </div>
    </div>
  );
}

export default AdminProfile;
