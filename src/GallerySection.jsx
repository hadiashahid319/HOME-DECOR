import PIC from "./assets/HOM/mirror1.jpg";
import second from "./assets/HOM/5.jpg";
import third from "./assets/HOM/vase.jpg";
import fourth from "./assets/HOM/2.jpg";

function GallerySection() {
  const items = [
    { src: PIC, name: "MIRRORS" },
    { src: second, name: "CANDLES" },
    { src: third, name: "VASES" },
    { src: fourth, name: "FRAMES" },
  ];

  return (
    <section
      id="allery"
      style={{ backgroundColor: "#f8f4ef" }}
       // light beige background
    >
      <div className="container py-5">
        {/* Title */}
        <h2
          className="text-center mb-5 fw-bold"
          style={{
            color: "#291C0E", // deep wood brown
            fontFamily: "'Playfair Display', serif",
            letterSpacing: "2px",
          }}
        >
          OUR COLLECTION
        </h2>

        {/* Responsive Grid */}
        <div className="row g-4 justify-content-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-3 text-center"
            >
              <div
                className="p-3 rounded shadow-sm h-100"
                style={{
                  backgroundColor: "#fff",
                  border: "2px solid #A78D78", // taupe border
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
               
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="img-fluid rounded"
                  style={{
                    height: "250px",
                    objectFit: "cover",
                    border: "3px solid #BEB5A9", // soft border
                  }}
                />
                <p
                  className="mt-3 fw-bold"
                  style={{
                    color: "#6E473B", // warm brown for names
                    fontSize: "1.1rem",
                    fontFamily: "'Merriweather', serif",
                  }}
                >
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
