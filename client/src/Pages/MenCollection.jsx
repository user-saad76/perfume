import { useEffect, useState } from "react";
import { Link } from "react-router";
import "bootstrap-icons/font/bootstrap-icons.css";

function MenCollection() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  // 🔹 Dummy data (replace with API later)
  useEffect(() => {
    setProducts([
      {
        id: 1,
        name: "Royal Oud",
        price: 3500,
        slug: "royal-oud",
        image: "https://via.placeholder.com/300x300",
      },
      {
        id: 2,
        name: "Blue De Chanel",
        price: 4200,
        slug: "blue-de-chanel",
        image: "https://via.placeholder.com/300x300",
      },
      {
        id: 3,
        name: "Aventus Creed",
        price: 5000,
        slug: "aventus-creed",
        image: "https://via.placeholder.com/300x300",
      },
      {
        id: 4,
        name: "Dior Sauvage",
        price: 3900,
        slug: "dior-sauvage",
        image: "https://via.placeholder.com/300x300",
      },
    ]);
  }, []);

  // 🔍 Search Filter
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-5">
      {/* HEADING */}
      <h2 className="fw-bold text-center mb-4">
        Men Collection
      </h2>

      {/* SEARCH BAR */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-6">
          <div className="input-group shadow-sm">
            <span className="input-group-text bg-dark text-white">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search men perfumes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* CARDS */}
      <div className="row g-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div className="col-6 col-md-3" key={item.id}>
              <div className="card h-100 shadow-sm border-0 text-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="card-img-top"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h6 className="fw-bold">{item.name}</h6>
                  <p className="text-muted mb-2">
                    Rs {item.price}
                  </p>

                  <Link
                    to={`/collection/${item.slug}`}
                    className="btn btn-dark btn-sm px-4"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h5 className="text-center text-muted">
            No products found
          </h5>
        )}
      </div>
    </div>
  );
}

export default MenCollection;
