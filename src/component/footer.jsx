import React from 'react';
const Footer = () => {
    return (
      <div className="foot">
        <div className="main-footer-div">
          <div className="footer" style={{ width: "100%", overflow: "hidden" }}>
            <div className="row">
              <div className="col-md-7 ml-5">
                <h5 className="font-weight-bold">We're Always Here To Help</h5>
                <p className="text-muted" style={{ fontSize: "14px" }}>
                  Reach out to us through any of these support channels
                </p>
              </div>
              <div className="col-md-2">
                <p className="text-muted" style={{ fontSize: "14px" }}>
                  HELP CENTER
                </p>
                <h5 className="font-weight-bold" style={{ marginTop: "-18px" }}>
                  help.noon.com
                </h5>
              </div>
              <div className="col-md-2">
                <p className="text-muted" style={{ fontSize: "14px" }}>
                  EMAIL SUPPORT
                </p>
                <h5 className="font-weight-bold" style={{ marginTop: "-18px" }}>
                  care@noon.com
                </h5>
              </div>
            </div>
          </div>
        </div>
  
        <div className="footer2" style={{ overflow: "hidden" }}>
          <div className="row">
            <div className="col-md-2">
              <h6>ELECTRONICS</h6>
              <p>Mobile</p>
              <p>Tablets</p>
              <p>Laptops</p>
              <p>Home Appliances</p>
              <p>Camera, Photo & Video</p>
              <p>Televisions</p>
              <p>Headphones</p>
              <p>Video Games</p>
            </div>
            <div className="col-md-2">
              <h6>FASHION</h6>
              <p>Women's Fashion</p>
              <p>Men's Fashion</p>
              <p>Girl's Fashion</p>
              <p>Boy's Fashion</p>
              <p>Watches</p>
              <p>Jewellery</p>
              <p>Women's Handbags</p>
              <p>Men's Eyewear</p>
            </div>
            <div className="col-md-2">
              <h6>HOME AND KITCHEN</h6>
              <p>Bath</p>
              <p>Home Decor</p>
              <p>Kitchen & Dining</p>
              <p>Home Improvement</p>
              <p>Audio & Video</p>
              <p>Furniture</p>
              <p>Lawn & Garden</p>
              <p>Pet Supplies</p>
            </div>
            <div className="col-md-2">
              <h6>BEAUTY</h6>
              <p>Fragrance</p>
              <p>Makeup</p>
              <p>Haircare</p>
              <p>Skin Care</p>
              <p>Personal Care</p>
              <p>Tools & Accesories</p>
              <p>Men's Grooming</p>
              <p>Health Care Essentials</p>
            </div>
            <div className="col-md-2">
              <h6>BABY</h6>
              <p>Strollers & Prams</p>
              <p>Car Seats</p>
              <p>Feeding</p>
              <p>Bathing & Skincare</p>
              <p>Diapering</p>
              <p>Baby Clothing & Shoes</p>
              <p>Baby & Toddler Toys</p>
              <p>Baby Foods</p>
            </div>
            <div className="col-md-2">
              <h6>TOP BRANDS</h6>
              <p>Mother Care</p>
              <p>Apple</p>
              <p>Nike</p>
              <p>Samsung</p>
              <p>Tefal</p>
              <p>L'Oreal Paris</p>
              <p>Sketchers</p>
              <p>Silsal</p>
            </div>
          </div>
  
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    marginTop: "25px",
                    marginLeft: "45px",
                  }}
                  className="text-muted"
                >
                  SHOP ON THE GO
                </p>
                <br />
                <div style={{ marginTop: "-30px" }} className="d-flex">
                  <img style={{ width: "120px" }} src="https://z.nooncdn.com/s/app/com/common/images/logos/app-store.svg" alt="" />
                  <img style={{ width: "120px" }} src="https://z.nooncdn.com/s/app/com/common/images/logos/google-play.svg" alt="" />
                </div>
              </div>
              <div className="col-md-6 pr-5">
                <p
                  className="text-muted ml-4"
                  style={{ marginTop: "25px", fontWeight: "bold" }}
                >
                  CONNECTION WITH US
                </p>
                <div className="d-flex " style={{ marginTop: "-10px" , padding:"5px" }}>
                  <i className="fa fa-facebook-official ml-2 icon"></i>
                  <i className="fa fa-twitter ml-2 icon"></i>
                  <i className="fa fa-instagram ml-2 icon"></i>
                  <i className="fa fa-linkedin  ml-2 icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="footer3">
          <p className="text-center pt-3">&copy; 2021 noon.All Right Reserved</p>
        </div>
      </div>
    );
  };
  
  export default Footer;