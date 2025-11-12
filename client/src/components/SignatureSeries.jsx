import React from "react";
import card1 from "../assets/Untitled design (5).png";
import card2 from "../assets/Untitled design (10).png";
import card3 from "../assets/Untitled design (17).png";

function SignatureSeries() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Signature Series</h2>

        <div className="row g-4">

          {/* Card 1 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm text-center">
              <img src={card1} className="card-img-top" alt="Men Perfume" />
              <div className="card-body">
                <h5 className="fw-bold">GULSCENT Men</h5>
                <p>Premium fragrance for men that lasts all day.</p>

                {/* Price */}
                <h5 className="text-danger">$99 <small className="text-muted text-decoration-line-through">$120</small></h5>

                {/* Quality */}
                <span className="badge bg-success mb-2">Excellent</span>

                {/* Rating */}
                <div className="text-warning">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm text-center">
              <img src={card2} className="card-img-top" alt="Women Perfume" />
              <div className="card-body">
                <h5 className="fw-bold">GULSCENT Women</h5>
                <p>Elegant floral notes with a lasting impression.</p>

                {/* Price */}
                <h5 className="text-danger">$109 <small className="text-muted text-decoration-line-through">$130</small></h5>

                {/* Quality */}
                <span className="badge bg-success mb-2">Excellent</span>

                {/* Rating */}
                <div className="text-warning">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm text-center">
              <img src={card3} className="card-img-top" alt="Attar Perfume" />
              <div className="card-body">
                <h5 className="fw-bold">GULSCENT Attar</h5>
                <p>Exquisite attar collection for fragrance lovers.</p>

                {/* Price */}
                <h5 className="text-danger">$70 <small className="text-muted text-decoration-line-through">$80</small></h5>

                {/* Quality */}
                <span className="badge bg-success mb-2">Premium</span>

                {/* Rating */}
                <div className="text-warning">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i>
                  <i className="bi bi-star"></i>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SignatureSeries;
