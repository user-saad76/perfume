import { Link } from "react-router";
import { useFetch } from "../hooks/useFetch";
import "bootstrap-icons/font/bootstrap-icons.css";

function WomenCollection() {
  const { Data: WomenCollections, loading, error } = useFetch(
    "http://localhost:5000/women-collections"
  );

  return (
    <div className="container py-5">
      {/* Heading */}
      <h2 className="text-center fw-bold mb-4 collection-heading">
        Women Collection
      </h2>

      {/* Optional Loading / Error */}
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-danger">{error}</p>}

      {/* Cards */}
      <div className="row g-4">
        {WomenCollections?.getAllproducts?.length > 0 ? (
          WomenCollections.getAllproducts.map((item) => (
            <div className="col-6 col-md-3" key={item._id}>
              <div className="card h-100 shadow-sm text-center border-0">
                <img
                  src={item.image?.secure_url || item.image}
                  alt={item.name}
                  className="card-img-top"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body">
                  <h6 className="fw-bold">{item.name}</h6>
                  <p className="text-muted mb-2">Rs {item.price}</p>

                  <Link
                    to={`/women-collection/${item.slug}`}
                    className="btn btn-dark btn-sm px-4"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          !loading && (
            <h5 className="text-center text-muted">
              No products found
            </h5>
          )
        )}
      </div>
    </div>
  );
}

export default WomenCollection;
