import ABOUT from "./assets/HOM/banner.jpg";

function Banner() {
  return (
    <section style={{ backgroundColor: "#E1D4C2" }} className="py-4">
      <div className="container-fluid">
        <div className="row align-items-center flex-column-reverse flex-md-row">
          <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h2
              className="fw-bold mb-3"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)",
                color: "#291C0E", // deep wooden brown
              }}
            >
              COZY CORNER
            </h2>
            <p
              className="mb-3 px-2"
              style={{
                fontFamily: "'Merriweather', serif",
                fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)",
                lineHeight: "1.6",
                color: "#6E473B", // soft muted brown
              }}
            >
              "Redefine your home with timeless decor <br />
              and modern elegance. Creating beautiful spaces that <br />
              reflect your style and story."
            </p>
            <button
              className="btn px-4 py-2 fw-semibold shadow mt-2"
              style={{
                backgroundColor: "#A78D78", // taupe
                color: "white",
                borderRadius: "30px",
                border: "3px solid #A78D78",
                transition: "all 0.3s ease",
                fontSize: "clamp(0.85rem, 1vw, 1rem)",
              }}
           
            >
              SHOP NOW
            </button>
          </div>

          <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
            <img
              src={ABOUT}
              alt="Weaver"
              className="img-fluid rounded shadow"
              style={{
                maxHeight: "400px",
                width: "100%",
                objectFit: "cover",
                border: "5px solid #E1D4C2", // subtle beige border
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
