import React, { useEffect, useState } from "react";

function SignatureSeries() {
  const [signatureSeries, setSignatureSeries] = useState([]);

  useEffect(() => {
    const getAllSignatureSeries = async () => {
      try {
        const res = await fetch("http://localhost:5000/signature-series");
        const data = await res.json();
         console.log("API Response:", data);
       setSignatureSeries(data.AllSignatureSeries || []);

      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    getAllSignatureSeries();
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Signature Series</h2>

        <div className="row g-4">

          {signatureSeries?.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow-sm text-center">

                {/* Image */}
                <img
                  src={item.image?.secure_url}
                  className="card-img-top"
                  alt={item.name}
                  style={{ height: "300px", objectFit: "cover" }}
                />

                <div className="card-body">
                  {/* Name */}
                  <h5 className="fw-bold">{item.name}</h5>

                  {/* Description */}
                  <p>{item.description?.slice(0, 60)}...</p>

                  {/* Price */}
                  <h5 className="text-danger">
                    Rs {item.discountPrice || item.price}
                    {item.discountPrice && (
                      <small className="text-muted text-decoration-line-through ms-2">
                        Rs {item.price}
                      </small>
                    )}
                  </h5>

                  {/* Rating */}
                  <div className="text-warning">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <i
                        key={i}
                        className={
                          i < item.rating ? "bi bi-star-fill" : "bi bi-star"
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
