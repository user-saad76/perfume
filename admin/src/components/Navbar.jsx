import React from "react";
import adminPic from "../assets/testimonial-2.jpg"; // <-- add your image here
import { Link } from "react-router";

function Navbar() {
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
            <a className="nav-link" href="#">
              <i className="bi bi-speedometer2 me-1"></i>
              Dashboard
            </a>
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
                src={adminPic}
                alt="Admin"
                className="rounded-circle me-2"
                style={{ width: "35px", height: "35px", objectFit: "cover" }}
              />
            </a>

            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item text-danger" href="#">Logout</a></li>
            </ul>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
