import React from "react";
import { Link } from "react-router-dom";

function SignatureSeries({ signatureSeries }) {
  return (
    <section className="py-5 bg-light">
      <div className="container">

        {/* Heading */}
        <h2 className="text-center fw-bold mb-4 signature-heading">
          Signature Series
        </h2>

        {/* Product Grid */}
        <div className="row g-3">

          {signatureSeries.map((item, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={index}>
              <div className="card signature-card h-100 border-0">

                {/* SALE BADGE */}
                {item.discountPrice && (
                  <span className="sale-badge">Sale</span>
                )}

                {/* IMAGE */}
                <div className="img-box">
                  <img
                    src={item.image?.secure_url}
                    alt={item.name}
                  />
                </div>

                {/* CONTENT */}
                <div className="content-box">

                  <h6 className="title mb-1">
                    <Link
                      to={`/signature-series/${item.slug}`}
                      className="text-dark text-decoration-none"
                    >
                      {item.name}
                    </Link>
                  </h6>

                  <p className="desc">
                    {item.description?.slice(0, 50)}...
                  </p>

                  {/* PRICE */}
                  <div className="price-row">
                    <span className="new-price">
                      Rs {item.discountPrice || item.price}
                    </span>

                    {item.discountPrice && (
                      <span className="old-price">
                        Rs {item.price}
                      </span>
                    )}
                  </div>

                  {/* RATING */}
                  <div className="rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <i
                        key={i}
                        className={
                          i < item.rating
                            ? "bi bi-star-fill"
                            : "bi bi-star"
                        }
                      ></i>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default SignatureSeries;
