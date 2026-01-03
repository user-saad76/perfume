import { Link } from "react-router";

function MoreCollection() {
    
    const collections = [
        {
            id: 1,
            name: "Men Collection",
            slug: "men",
            image: "/images/men.jpg",
        },
        {
            id: 2,
            name: "Women Collection",
            slug: "women",
            image: "/images/women.jpg",
        },
        {
            id: 3,
            name: "Tester",
            slug: "tester",
            image: "/images/tester.jpg",
        },
        {
            id: 4,
            name: "Attar",
            slug: "attar",
            image: "/images/attar.jpg",
        },
    ];

    return (
        <div className="container py-5">
              {/* Heading */}
          <h2 className="text-center fw-bold mb-4 collection-heading">
          Signature Series
            </h2>
            <div className="row g-4">
                {collections.map((item) => (
                    <div className="col-6 col-md-3" key={item.id}>
                        <div className="card h-100 shadow-sm text-center">
                            <img
                                src={item.image}
                                className="card-img-top"
                                alt={item.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <Link
                                    to={`/collection/${item.slug}`}
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
