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
    <section id="gallery">
      <div className="container py-5">
        {/* Title */}
        <h2 className="text-center mb-4">OUR COLLECTION</h2>

        {/* Responsive Grid */}
        <div className="row g-4 justify-content-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-3 text-center"
            >
             <img
  src={item.src}
  alt={item.name}
  className="img-fluid rounded"
  style={{ height: "250px", objectFit: "cover" }} // 👈 200 → 250
/>
              <p className="mt-2 fw-bold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
