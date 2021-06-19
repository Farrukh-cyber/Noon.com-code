
function Carosel() {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://k.nooncdn.com/cms/pages/20210614/9869c6c393e8857e667c2b8c11e13e16/en_slider-01.gif" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://k.nooncdn.com/cms/pages/20210614/557d21bf8f395c06ac25a0779f27a6fa/en_cookware-01.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://k.nooncdn.com/cms/pages/20201020/79a2e38e27583a1a5db92d21097f3b8e/en_slider-emaar-uae-emaar.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://k.nooncdn.com/cms/pages/20201020/79a2e38e27583a1a5db92d21097f3b8e/en_slider-emaar-uae-emaar.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://k.nooncdn.com/cms/pages/20210614/557d21bf8f395c06ac25a0779f27a6fa/en_cookware-01.png" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    
    </div>
  );



}
export default Carosel;