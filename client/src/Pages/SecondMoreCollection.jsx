import { Link } from "react-router";
import { useFetch } from "../hooks/useFetch";

function SecondMoreCollection() {
  const { Data: SecondCollections, loading, error } = useFetch(
    "http://localhost:5000/secondmore-collections"
  );

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (error) return <div className="text-center py-5 text-danger">Error</div>;

  return (
    <div className="container-fluid py-5">
      <div className="row g-4">
        {SecondCollections?.getAllproducts?.map((item) => (
          <div className="col-12" key={item._id}>
            {/* Banner Card */}
            <div className="card shadow-sm border-0">
              <img
                src={item.image?.secure_url}
                alt={item.name}
                className="card-img-top"
                style={{
                  height: "320px",
                  objectFit: "cover"
                }}
              />

              <div className="card-body text-center">
                <h4 className="card-title fw-bold">{item.name}</h4>

                <Link
                  to="/men-collection"
                  className="btn btn-dark"
                >
                  View Collection
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SecondMoreCollection;
