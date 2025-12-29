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

   {/* All Collections */}
<section>
  <h3 className="fw-bold mb-4 text-center">
    <i className="fa-solid fa-layer-group text-primary me-2"></i>
    Our Collections
  </h3>

  <div className="row g-4">

    {/* Card 1 */}
    <div className="col-md-4">
      <div className="card h-100 shadow-sm">
        <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Jackets" />
        <div className="card-body">
          <h5 className="card-title">Men Jackets</h5>
          <p className="card-text">Premium jackets for men.</p>
          <button className="btn btn-outline-dark w-100">View Collection</button>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="col-md-4">
      <div className="card h-100 shadow-sm">
        <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Formal Shirts" />
        <div className="card-body">
          <h5 className="card-title">Formal Shirts</h5>
          <p className="card-text">Elegant office wear.</p>
          <button className="btn btn-outline-dark w-100">View Collection</button>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="col-md-4">
      <div className="card h-100 shadow-sm">
        <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Casual Wear" />
        <div className="card-body">
          <h5 className="card-title">Casual Wear</h5>
          <p className="card-text">Daily casual outfits.</p>
          <button className="btn btn-outline-dark w-100">View Collection</button>
        </div>
      </div>
    </div>

    {/* Card 4 */}
    <div className="col-md-4">
      <div className="card h-100 shadow-sm">
        <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Dresses" />
        <div className="card-body">
          <h5 className="card-title">Women Dresses</h5>
          <p className="card-text">Modern stylish dresses.</p>
          <button className="btn btn-outline-dark w-100">View Collection</button>
        </div>
      </div>
    </div>

    {/* Card 5 */}
    <div className="col-md-4">
      <div className="card h-100 shadow-sm">
        <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Traditional Wear" />
        <div className="card-body">
          <h5 className="card-title">Traditional Wear</h5>
          <p className="card-text">Elegant ethnic outfits.</p>
          <button className="btn btn-outline-dark w-100">View Collection</button>
        </div>
      </div>
    </div>

    {/* Card 6 */}
    <div className="col-md-4">
      <div className="card h-100 shadow-sm">
        <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Kids Wear" />
        <div className="card-body">
          <h5 className="card-title">Kids Wear</h5>
          <p className="card-text">Cute & comfortable outfits.</p>
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
