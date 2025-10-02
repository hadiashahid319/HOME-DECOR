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
  ];

  return (
    <section id="gallery">
      <div className="container py-5" style={{ background: "#F5F2ED" }}>
        {/* Title */}
        <h2 className="text-center mb-4" style={{ fontFamily: "serif" }}>
          MOST SOLD ITEMS
        </h2>

        {/* Responsive Grid */}
        <div className="row g-4 justify-content-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 d-flex justify-content-center"
            >
              <div
                style={{
                  width: "220px",
                  background: "white",
                  borderRadius: "10px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  textAlign: "center",
                  paddingBottom: "15px",
                }}
              >
                <img
                  src={item.src}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                />
                <p className="mt-2 fw-bold">{item.name}</p>
                <p className="text-success">{item.price}</p>
                <button
                  style={{
                    background: "#111010ff",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    padding: "6px 12px",
                    cursor: "pointer",
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
