

function FeaturedCollection({ featuredCollectionData }) {
    console.log("featuredCollection data:", featuredCollectionData);

    // Your API returns an ARRAY directly
    const products = Array.isArray(featuredCollectionData)
        ? featuredCollectionData
        : [];

    return (
        <div className="container py-5 featured-wrapper">
            <h2 className="text-center fw-bold mb-4 featured-title">
                Featured <span>Collection</span>
            </h2>

            <div className="row g-4">
                {products.map((item) => (
         <div key={item._id} className="col-lg-3 col-md-4 col-sm-6">
        <div className="card h-100 shadow-sm border-0">
      {/* Image */}
      <div className="card-img-top text-center p-2" style={{ backgroundColor: "#f8f9fa" }}>
        <img
          src={item.image?.secure_url}
          alt={item.name}
          className="img-fluid"
        //   style={{
        //     maxHeight: "250px",
        //     objectFit: "cover",
        //     borderRadius: "8px",
        //   }}
        />
      </div>

      {/* Card Body */}
      <div className="card-body d-flex flex-column text-center">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text fw-bold">Rs {item.price}</p>
        <button className="btn btn-dark mt-auto w-100">View Details</button>
      </div>
    </div>
  </div>
))}

            </div>
        </div>
    );
}

export default FeaturedCollection;
