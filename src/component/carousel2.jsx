import React from 'react';
const Crosel=()=>{
    return (
        <>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://k.nooncdn.com/mon/1623527751145-ckpu6i67d0b9r2rrb9jip62z7.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://k.nooncdn.com/cms/pages/20210618/3215f5aa897be941072a74e0b3db2b07/en_strip-01.gif" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://k.nooncdn.com/cms/pages/20210613/de0879fab0d9084e52a066cbb96b1b1a/en_s-01.png" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        </>
      );
}
export default Crosel;