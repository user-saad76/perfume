import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function SpecialCollection() {
  return (
    <div className="container py-5">

      {/* Page Title */}
      <h1 className="text-center fw-bold mb-4">
        <i className="fa-solid fa-star me-2 text-warning"></i>
        Special Collection
      </h1>

      {/* Search Bar */}
      <div className="row justify-content-center mb-5">
        <div className="col-md-8">
          <div className="input-group input-group-lg shadow-sm">
            <input
              type="text"
              className="form-control"
              placeholder="Search collections..."
            />
            <button className="btn btn-dark">
              <i className="fa-solid fa-magnifying-glass me-1"></i>
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Winter Collection */}
      <section className="mb-5">
        <h3 className="fw-bold mb-3">
          <i className="fa-solid fa-snowflake text-primary me-2"></i>
          Winter Collection
        </h3>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Winter" />
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fa-solid fa-jacket me-2"></i>
                  Winter Jacket
                </h5>
                <p className="card-text">
                  Warm & stylish winter wear for cold days.
                </p>
                <button className="btn btn-outline-dark w-100">
                  <i className="fa-solid fa-eye me-1"></i>
                  View Collection
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Winter" />
              <div className="card-body">
                <h5 className="card-title">Hoodies</h5>
                <p className="card-text">Comfortable hoodies for winter season.</p>
                <button className="btn btn-outline-dark w-100">View Collection</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Winter" />
              <div className="card-body">
                <h5 className="card-title">Sweaters</h5>
                <p className="card-text">Premium sweaters with modern designs.</p>
                <button className="btn btn-outline-dark w-100">View Collection</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summer Collection */}
      <section className="mb-5">
        <h3 className="fw-bold mb-3">
          <i className="fa-solid fa-sun text-warning me-2"></i>
          Summer Collection
        </h3>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Summer" />
              <div className="card-body">
                <h5 className="card-title">T-Shirts</h5>
                <p className="card-text">Light & breathable summer t-shirts.</p>
                <button className="btn btn-outline-dark w-100">View Collection</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Summer" />
              <div className="card-body">
                <h5 className="card-title">Shorts</h5>
                <p className="card-text">Comfortable shorts for hot days.</p>
                <button className="btn btn-outline-dark w-100">View Collection</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Summer" />
              <div className="card-body">
                <h5 className="card-title">Casual Wear</h5>
                <p className="card-text">Trendy casual outfits for summer.</p>
                <button className="btn btn-outline-dark w-100">View Collection</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Festival Collection */}
      <section>
        <h3 className="fw-bold mb-3">
          <i className="fa-solid fa-gift text-danger me-2"></i>
          Festival Collection
        </h3>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Festival" />
              <div className="card-body">
                <h5 className="card-title">Wedding Wear</h5>
                <p className="card-text">Luxury outfits for weddings.</p>
                <button className="btn btn-outline-dark w-100">View Collection</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Festival" />
              <div className="card-body">
                <h5 className="card-title">Traditional Wear</h5>
                <p className="card-text">Elegant traditional festival dresses.</p>
                <button className="btn btn-outline-dark w-100">View Collection</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Festival" />
              <div className="card-body">
                <h5 className="card-title">Party Wear</h5>
                <p className="card-text">Stylish outfits for celebrations.</p>
                <button className="btn btn-outline-dark w-100">View Collection</button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default SpecialCollection;
