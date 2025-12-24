


import banner1 from "../assets/new one banner.jpg";
import banner2 from "../assets/women perfume.jpeg";
import banner3 from "../assets/oud perfeme.avif";



function SpecialCollections() {
  return (
    <div className="container-fluid p-0 special-carousel position-relative">
      <div
        id="specialCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#specialCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#specialCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#specialCarousel" data-bs-slide-to="2"></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} className="d-block w-100 carousel-img" alt="Banner 1" />
          </div>

          <div className="carousel-item">
            <img src={banner2} className="d-block w-100 carousel-img" alt="Banner 2" />
            
          </div>

          <div className="carousel-item">
            <img src={banner3} className="d-block w-100 carousel-img" alt="Banner 3" />
            
          </div>
        </div>

        {/* Global CTA Button */}
        <div className="carousel-global-btn">
          <button className="btn btn-warning btn-lg">
            Shop Now
          </button>
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#specialCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#specialCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
}

export default SpecialCollections;
