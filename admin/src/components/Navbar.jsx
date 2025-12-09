import React from "react";
import adminPic from "../assets/testimonial-2.jpg"; // <-- add your image here
import { Link } from "react-router";
import { useAdmin } from "../contexts/AdminAuthProvider";



function Navbar() {
    const { admin,error,loading, logoutAdmin} = useAdmin()
    
    console.log("admin",admin)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 shadow-sm">
      <a className="navbar-brand fw-bold" href="#">
        Perfume Admin
      </a>

      {/* Toggle Button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#adminNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar Content */}
      <div className="collapse navbar-collapse" id="adminNavbar">
        <ul className="navbar-nav ms-auto">

          {/* Dashboard */}
          <li className="nav-item">
            <Link className="nav-link" to ="/">
              <i className="bi bi-speedometer2 me-1"></i>
              Dashboard
            </Link>
          </li>

          {/* Products */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="productDropdown"
              role="button"
              data-bs-toggle="dropdown"
            >
              <i className="bi bi-bag me-1"></i> Products
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><Link className="dropdown-item" to ="/signature-series">Add Signature Series</Link></li>
              <li><a className="dropdown-item" href="#">Manage Products</a></li>
              <li><a className="dropdown-item" href="#">Categories</a></li>
            </ul>
          </li>

          {/* Orders */}
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="bi bi-cart-check me-1"></i>
              Orders
            </a>
          </li>

          {/* Users */}
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="bi bi-people me-1"></i>
              Users
            </a>
          </li>

          {/* Complaints */}
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="bi bi-exclamation-octagon me-1"></i>
              Complaints
            </a>
          </li>

          {/* Messages */}
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="bi bi-chat-dots me-1"></i>
              Messages
            </a>
          </li>

          {/* Profile Image */}
          <li className="nav-item dropdown ms-3">
            <a
              className="nav-link dropdown-toggle d-flex align-items-center"
              href="#"
              id="profileDropdown"
              role="button"
              data-bs-toggle="dropdown"
            >
              <img
                src={admin.image.secure_url}
                alt="Admin"
                className="rounded-circle me-2"
                style={{ width: "35px", height: "35px", objectFit: "cover" }}
              />
            </a>
            
            <ul className="dropdown-menu dropdown-menu-end">
             {!admin ? (
                    <>
                      <li><Link className="dropdown-item" to="/sign-in">Sign In</Link></li>
                    </>
                  ) : (
                    <>
                      <li><Link className="dropdown-item" to="/admin/profile">My Profile</Link></li>
                      <li><button onClick={logoutAdmin} className="dropdown-item">Logout</button></li>
                       <li><Link className="dropdown-item" to="/sign-up">Sign Up</Link></li>
                    </>
                  )}
              
            </ul>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
