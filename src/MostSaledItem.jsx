import PIC from "./assets/HOM/mirror1.jpg";
import second from "./assets/HOM/5.jpg";
import third from "./assets/HOM/vase.jpg";
import fourth from "./assets/HOM/2.jpg";

function GallerySection() {
  // 9 items
  const items = [
    { src: PIC, name: "MIRRORS", price: "Rs. 1500" },
    { src: second, name: "CANDLES", price: "Rs. 800" },
    { src: third, name: "VASES", price: "Rs. 1200" },
    { src: fourth, name: "FRAMES", price: "Rs. 1000" },
    { src: PIC, name: "MIRRORS", price: "Rs. 1500" },
    { src: second, name: "CANDLES", price: "Rs. 800" },
    { src: third, name: "VASES", price: "Rs. 1200" },
    { src: PIC, name: "MIRRORS", price: "Rs. 1500" },
    { src: second, name: "CANDLES", price: "Rs. 800" },
    { src: third, name: "VASES", price: "Rs. 1200" },
    { src: PIC, name: "MIRRORS", price: "Rs. 1500" },
    { src: second, name: "CANDLES", price: "Rs. 800" },
  ];

  return (
    <section id="gallery" style={{ backgroundColor: "#f8f4ef" }}>
      <div className="container py-5">
        {/* Title */}
        <h2
          className="text-center mb-5 fw-bold"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#51310d",
            fontSize: "clamp(1.8rem, 2.5vw, 2.5rem)",
          }}
        >
          MOST SOLD ITEMS
        </h2>

        {/* Responsive Grid */}
        <div className="row g-4 justify-content-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
            >
             <div
               style={{
                width: "230px",
                background: "white",
                borderRadius: "15px",
                border: "2px solid #E1D4C2", // ✅ Soft Beige Border
                boxShadow: "0 6px 12px rgba(0,0,0,0.08)",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
  }}
>
                <img
                  src={item.src}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                  }}
                />
                <p
                  className="mt-3 fw-bold"
                  style={{
                    fontFamily: "'Merriweather', serif",
                    fontSize: "1.1rem",
                    color: "#2c1b0c",
                  }}
                >
                  {item.name}
                </p>
                <p style={{ color: "#744c1e", fontWeight: "600" }}>
                  {item.price}
                </p>
                <button
                  style={{
                    background: "#744c1e",
                    color: "white",
                    border: "none",
                    borderRadius: "25px",
                    padding: "8px 16px",
                    cursor: "pointer",
                    fontWeight: "500",
                    transition: "background 0.3s ease",
                  }}
                >
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
