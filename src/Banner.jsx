
import ABOUT from "./assets/HOM/banner.jpg";
function Banner() {
  return (
    <section
      id="about"
      className="py-0"
      style={{ backgroundColor: "#dcae7aff" }} // Dull Tea Pink
    >
      <div className="container-fluid">
        {/* One Row with Two Columns */}
        <div className="row align-items-center">
            {/* RIGHT COLUMN (Image) */}
          <div className="col-md-6 text-center">
            <img
              src={ABOUT}
              alt="Weaver"
              className="img-fluid rounded shadow"
              style={{
                maxHeight: "400px",
                objectFit: "cover",
                border: "5px solid #dcae7aff",
                width:"100%",
              }}
            />
          </div>
          
          {/* LEFT COLUMN (Text) */}
          <div className="col-md-6">
            <h2
              className="fw-bold mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "2.8rem",
                color: "#51310dff",
              }}
            >
              About Us
            </h2>
            <p
              className="mb-4"
              style={{
                fontFamily: "'Merriweather', serif",
                fontSize: "1.2rem",
                lineHeight: "1.8",
                color:"#0b0a0aff",
              }}
            >
              "Redefine your home with timeless decor <br />and modern elegance.
                Creating beautiful spaces that<br /> reflect your style and story."
            </p>
            <button
              className="btn px-5 py-2 fw-semibold shadow"
              style={{
                backgroundColor: "#744c1eff",
                color: "white",
                borderRadius: "30px",
                border: "5px solid #744c1eff",
                transition: "all 0.3s ease",
              }}
            >
              SHOP NOW
            </button>
          </div>

          
        </div>
      </div>
    </section>
  );
}

export default Banner;