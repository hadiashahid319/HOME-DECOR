import ABOUT from "./assets/HOM/decor.jpg";

function View() {
  return (
    <section
      id="about"
      className="py-5"
      style={{ backgroundColor: "#dcae7aff" }} // Dull Tea Pink
    >
      <div className="container-fluid">
        <div className="row align-items-center flex-column-reverse flex-md-row">
          
          {/* LEFT COLUMN (Text + Button) */}
          <div className="col-12 col-md-6 text-center text-md-start">
            <h2
              className="fw-bold mb-3"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                color: "#3e2304ff",
              }}
            >
              About Us
            </h2>
            <p
              className="mb-3 px-2"
              style={{
                fontFamily: "'Merriweather', serif",
                fontSize: "clamp(0.95rem, 1.2vw, 1.2rem)",
                lineHeight: "1.8",
                color: "#151413ff",
              }}
            >
              At NOVALIE, we believe every corner deserves a touch of beauty.
              Our curated décor blends timeless style with modern charm to create
              spaces you’ll love coming home to.
            </p>

            {/* Static Button */}
            <button
              className="btn px-4 py-2 fw-semibold shadow mt-2"
              style={{
                backgroundColor: "#744c1eff",
                color: "white",
                borderRadius: "30px",
                border: "3px solid #825613ff",
                transition: "all 0.3s ease",
                fontSize: "clamp(0.9rem, 1vw, 1rem)",
              }}
            >
              LEARN MORE
            </button>
          </div>

          {/* RIGHT COLUMN (Image) */}
          <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
            <img
              src={ABOUT}
              alt="About"
              className="img-fluid rounded shadow"
              style={{
                maxHeight: "400px",
                width: "80%",
                objectFit: "cover",
                border: "5px solid #e0dadaff",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default View;
