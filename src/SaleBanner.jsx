
function SaleBanner() {
  return (
    <div className="container-fluid my-4">
      <div className="row">
        {/* Left Side Big Image */}
        <div className="col-md-7">
          <img
            src={VIEW }// yahan apni image ka URL lagao
            alt="Main Banner"
            className="img-fluid w-100 h-100 object-fit-cover"
          />
        </div>

        {/* Right Side Content */}
        <div
          className="col-md-5 text-white d-flex flex-column justify-content-center p-4"
          style={{ backgroundColor: "#5f6c84" }}
        >
          {/* Sale Text */}
          <div className="mb-4 text-center">
            <h2 className="fw-bold" style={{ fontFamily: "serif" }}>
              THE WINTER SALE
            </h2>
            <hr className="border-light my-3" />
            <p className="mb-1">NOW THRU 10/25</p>
            <h3 className="fw-bold">25% OFF EVERYTHING</h3>
            <button className="btn btn-dark mt-3 px-4">SHOP NOW</button>
          </div>

          {/* Small Images */}
          <div className="d-flex flex-column gap-3">
            <img
              src={VIEW}
              alt="Small 1"
              className="img-fluid"
            />
            <img
              src={VIEW}
              alt="Small 2"
              className="img-fluid"
            />
            <img
              src={PIC}
              alt="Small 3"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaleBanner;