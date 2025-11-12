import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router";

function Navbar() {
  const [cartCount] = useState(3);
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchToggle = () => setShowSearch(!showSearch);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchValue}`);
    setSearchValue("");
    setShowSearch(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 position-relative">
        <div className="container">

          {/* Brand */}
          <a className="navbar-brand fw-bold" href="#">
            PerfumeStore
          </a>

          {/* Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto gap-3">
              <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to ="/shop">Shop</Link></li>
              <li className="nav-item"><a className="nav-link" href="#">Travel Set</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
              <li className="nav-item"><a className="nav-link" href="#">FAQ</a></li>
            </ul>

            {/* Icons */}
            <div className="d-flex align-items-center gap-3">

              {/* Search Icon */}
              <i
                className="bi bi-search text-white fs-5"
                style={{ cursor: "pointer" }}
                onClick={handleSearchToggle}
              ></i>

              {/* Shopping Bag with Badge */}
              <div className="position-relative">
                <i className="bi bi-bag text-white fs-5"></i>
                <span
                  className="badge bg-danger text-white rounded-circle position-absolute"
                  style={{ fontSize: "0.7rem", top: "-5px", right: "-10px" }}
                >
                  {cartCount}
                </span>
              </div>

              {/* User Icon with Dropdown */}
              <div className="dropdown position-relative">
                <i
                  className="bi bi-person text-white fs-5 dropdown-toggle"
                  role="button"
                  id="userDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ cursor: "pointer" }}
                ></i>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                  <li><a className="dropdown-item" href="#">Sign In</a></li>
                  <li><a className="dropdown-item" href="#">Sign Up</a></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </nav>

      {/* Category Buttons Bar */}
      <div className="bg-secondary py-2">
        <div className="container d-flex justify-content-center gap-3 flex-wrap">
          <button className="btn btn-outline-light btn-sm">Women</button>
          <button className="btn btn-outline-light btn-sm">Men</button>
          <button className="btn btn-outline-light btn-sm">Attar</button>
          <button className="btn btn-outline-light btn-sm">Tester</button>
        </div>
      </div>

      {/* Large Search Input Overlay */}
      {showSearch && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "rgba(0,0,0,0.8)", zIndex: 1050 }}
        >
          <form onSubmit={handleSearchSubmit} className="w-75">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search for products..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              autoFocus
            />
          </form>
          <i
            className="bi bi-x-lg text-white fs-3 position-absolute"
            style={{ top: "20px", right: "30px", cursor: "pointer" }}
            onClick={() => setShowSearch(false)}
          ></i>
        </div>
      )}
    </>
  );
}

export default Navbar;
