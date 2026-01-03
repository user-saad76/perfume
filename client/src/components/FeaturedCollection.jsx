import { Link } from "react-router-dom";

function FeaturedCollection({ featuredCollectionData }) {

  const products = Array.isArray(featuredCollectionData)
    ? featuredCollectionData
    : [];

  return (
    <section className="py-5 bg-light">
      <div className="container featured-wrapper">

        {/* Heading */}
        <h2 className="text-center fw-bold mb-4 featured-title">
          Featured <span>Collection</span>
        </h2>

        {/* Grid */}
        <div className="row g-3">

          {products.map((item) => (
            <div
              key={item._id}
              className="col-6 col-md-4 col-lg-3"
            >
              <div className="card h-100 shadow-sm border-0 featured-card">

                {/* IMAGE */}
                <div className="featured-img-box">
                  <img
                    src={item.image?.secure_url}
                    alt={item.name}
                    className="img-fluid"
                  />
                </div>

                {/* BODY */}
                <div className="card-body d-flex flex-column text-center p-2">

                  <h6 className="fw-bold mb-1">
                    {item.name}
                  </h6>

                  <p className="fw-bold text-danger mb-2">
                    Rs {item.price}
                  </p>

                  <Link
                    className="btn btn-dark btn-sm mt-auto w-100"
                    to={`/featured-collection/${item.slug}`}
                  >
                    View Details
                  </Link>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default FeaturedCollection;
