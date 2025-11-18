

function FeaturedCollection() {
    const products = [
        {
            id: 1,
            name: "Signature Oud",
            price: 2500,
            image: "https://via.placeholder.com/300x350",
        },
        {
            id: 2,
            name: "Royal Musk",
            price: 3200,
            image: "https://via.placeholder.com/300x350",
        },
        {
            id: 3,
            name: "Amber Night",
            price: 2800,
            image: "https://via.placeholder.com/300x350",
        },
        {
            id: 4,
            name: "Blue Wave",
            price: 2100,
            image: "https://via.placeholder.com/300x350",
        },
    ];

    return (
        <div className="container py-5 featured-wrapper">
            <h2 className="text-center fw-bold mb-4 featured-title">
                Featured <span>Collection</span>
            </h2>

            <div className="row g-4">
                {products.map((item) => (
                    <div key={item.id} className="col-lg-3 col-md-4 col-sm-6">
                        <div className="fc-card shadow-sm">
                            <img src={item.image} alt={item.name} className="fc-img" />

                            <div className="fc-body">
                                <h5 className="fc-name">{item.name}</h5>
                                <p className="fc-price">Rs {item.price}</p>
                                <button className="btn btn-dark w-100 mt-2">View Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FeaturedCollection;
