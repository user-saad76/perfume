import { Link } from "react-router";
import { useFetch } from "../hooks/useFetch";

function MoreCollection() {
     const { Data: MoreCollections, loading, error } = useFetch(
        "http://localhost:5000/more-collections"
      );
    return (
        <div className="container py-5">
              {/* Heading */}
          <h2 className="text-center fw-bold mb-4 collection-heading">
            More Collection
            </h2>
            <div className="row g-4">
                {MoreCollections?.getAllproducts?.map((item) => (
                    <div className="col-6 col-md-3" key={item.id}>
                        <div className="card h-100 shadow-sm text-center">
                            <img
                                src={item.image?.secure_url}
                                className="card-img-top"
                                alt={item.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <Link
                                    to={`/men-collection`}
                                    className="btn btn-dark btn-sm"
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

export default MoreCollection;
