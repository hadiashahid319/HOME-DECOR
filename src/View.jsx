
import ABOUT from "./assets/HOM/decor.jpg";
function View() {
  return (
    <section
      id="about"
      className="py-5"
      style={{ backgroundColor: "#dcae7aff" }} // Dull Tea Pink
    >
      <div className="container-fluid">
        {/* One Row with Two Columns */}
        <div className="row align-items-center">
          
          {/* LEFT COLUMN (Text) */}
          <div className="col-md-6">
            <h2
              className="fw-bold mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "2.8rem",
                color: "#3e2304ff",
              }}
            >
              About Us
            </h2>
            <p
              className="mb-4"
              style={{
                fontFamily: "'Merriweather', serif",
                fontSize: "1.2rem", width:"70%", paddingLeft:"20%",
                lineHeight: "1.8",
                color: "#151413ff",
              }}
            >
             At  NOVALIE, we believe every corner deserve a touch <br />of beauty. our curated decor blends timeless <br />style with modern charm to create space <br />
              you'll love coming home to.
            </p>
            <button
              className="btn px-5 py-2 fw-semibold shadow"
              style={{
                backgroundColor: "#744c1eff",
                color: "white",
                borderRadius: "30px", width:"70",
                border: "5px solid #825613ff",
                transition: "all 0.3s ease",
              }}
            >
              Learn More
            </button>
          </div>

          {/* RIGHT COLUMN (Image) */}
          <div className="col-md-6 text-center">
            <img
              src={ABOUT}
              alt="Weaver"
              className="img-fluid rounded shadow"
              style={{
                maxHeight: "400px", width:"70%",
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