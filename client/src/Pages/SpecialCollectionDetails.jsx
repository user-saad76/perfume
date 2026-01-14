import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../Contexts/CartProvider";
import { useAuth } from "../Contexts/AuthProvider";

function SpecialCollectionDetails() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart } = useCart();
  const { user } = useAuth();

  useEffect(() => {
    const  getSpecialCollectionBySlug = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:5000/special-collection/slug/${slug}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data.product);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getSpecialCollectionBySlug();
  }, [slug]);

  if (loading) return <h2 className="text-center mt-5">Loading product...</h2>;
  if (error) return <h2 className="text-center text-danger mt-5">Error: {error}</h2>;
  if (!product) return <h2 className="text-center mt-5">Product not found</h2>;

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12">
          {/* Rectangle card */}
          <div className="card shadow-sm border-0 p-3" style={{ borderRadius: "0.5rem" }}>
            <div className="row g-3">
              {/* Image */}
              <div className="col-md-5">
                {product.image?.secure_url && (
                  <img
                    src={product.image.secure_url}
                    alt={product.name}
                    className="img-fluid rounded"
                    style={{ objectFit: "cover", height: "100%" }}
                  />
                )}
              </div>

              {/* Product Details */}
              <div className="col-md-7 d-flex flex-column justify-content-between">
                <div>
                  <h2 className="fw-bold mb-3">{product.name}</h2>

                  <ul className="list-unstyled mb-3">
                    <li className="mb-2">
                      <strong>Description: </strong>
                      {product.description || "No description available."}
                    </li>
                    <li className="mb-2">
                      <strong>Category: </strong>
                      {product.category || "No category"}
                    </li>
                    <li className="mb-2">
                      <strong>Price: </strong>
                      Rs {product.discountPrice || product.price}{" "}
                      {product.discountPrice && (
                        <small className="text-muted text-decoration-line-through ms-2">
                          Rs {product.price}
                        </small>
                      )}
                    </li>
                    {product.rating && (
                      <li className="mb-2">
                        <strong>Rating: </strong>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <i
                            key={i}
                            className={`bi ${
                              i < product.rating ? "bi-star-fill text-warning" : "bi-star text-secondary"
                            }`}
                          ></i>
                        ))}
                        <span className="ms-2">({product.rating})</span>
                      </li>
                    )}
                    <li className="mb-2">
                      <strong>Stock: </strong>
                      {product.stock || 0} available
                    </li>
                  </ul>
                </div>

                {/* Quantity selector + Add to Cart */}
                <div className="d-flex align-items-center gap-3 mt-3">
                  {user && user?.name ? (
                    <button className="btn btn-dark flex-grow-1" onClick={() => addToCart(product)}>
                      Add to Cart
                    </button>
                  ) : (
                    <button
                      className="btn btn-dark flex-grow-1"
                      onClick={() => alert("You can add to cart when you sign in")}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* End Rectangle card */}
        </div>
      </div>
    </div>
  );
}

export default SpecialCollectionDetails;
