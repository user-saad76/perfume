import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFetch } from "../hooks/useFetch"; // your custom hook
import { Link } from "react-router-dom";

function SpecialCollection() {
  // Fetch special collections from API
  const { Data: specialCollections, loading, error } = useFetch(
    "http://localhost:5000/special-collection"
  );

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
          {loading && <p className="text-center">Loading collections...</p>}
          {error && (
            <p className="text-center text-danger">
              Something went wrong: {error.message || error}
            </p>
          )}

          {/* Map over fetched data */}
          {specialCollections?.getAllproducts?.map((item) => (
            <div key={item._id} className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={item.image?.secure_url} // assuming each item has 'image'
                  className="card-img-top"
                  alt={item.name}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description || "No description available."}</p>
                  <Link
                    to={`/special-collection/${item.slug}`} 
                    className="btn btn-outline-dark mt-auto w-100"
                  >
                    View Collection
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SpecialCollection;
