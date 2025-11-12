import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import banner1 from "../assets/black.png";
import banner2 from "../assets/women perfume.jpeg";
import banner3 from "../assets/oud perfeme.avif";

function PerfumeBanners() {
  return (
    <div
      id="perfumeCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000" // auto-slide every 3 seconds
    >
      <div className="carousel-inner">

        {/* Slide 1 - Men Perfume */}
        <div className="carousel-item active">
          <img src={banner1} className="d-block w-100" alt="Men Perfume" />
          <div className="carousel-caption d-none d-md-block text-start">
            <div className="banner-content p-4 rounded">
              <h2 className="fw-bold">GULSCENT</h2>
              <p className="mb-0">Premium Men Perfume Collection</p>
            </div>
          </div>
        </div>

        {/* Slide 2 - Women Perfume */}
        <div className="carousel-item">
          <img src={banner2} className="d-block w-100" alt="Women Perfume" />
          <div className="carousel-caption d-none d-md-block text-start">
            <div className="banner-content p-4 rounded">
              <h2 className="fw-bold">GULSCENT</h2>
              <p className="mb-0">Elegant Women Perfume Collection</p>
            </div>
          </div>
        </div>

        {/* Slide 3 - Attar Perfume */}
        <div className="carousel-item">
          <img src={banner3} className="d-block w-100" alt="Attar Perfume" />
          <div className="carousel-caption d-none d-md-block text-start">
            <div className="banner-content p-4 rounded">
              <h2 className="fw-bold">GULSCENT</h2>
              <p className="mb-0">Exquisite Attar Collection</p>
            </div>
          </div>
        </div>

      </div>

      {/* Previous Button */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#perfumeCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      {/* Next Button */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#perfumeCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

    </div>
  );
}

export default PerfumeBanners;
