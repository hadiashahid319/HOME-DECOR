import PIC from "./assets/HOM/mirror1.jpg";
import second from "./assets/HOM/5.jpg";
import third from "./assets/HOM/vase.jpg";
import fourth from "./assets/HOM/2.jpg";

function GallerySection() {
  // Array of images with name
  const items = [
    { src: PIC, name: "MIRRORS" },
    { src: second, name: "CANDLES" },
    { src: third, name: "VASES" },
     { src: fourth, name: "FRAMES" },
  ];

  return (
    <div className="container py-5" style={{ background: "#F5F2ED" }}>
      {/* Title */}
      <h2 className="text-center mb-4" style={{ fontFamily: "serif" }}>
        OUR COLLECTION
      </h2>

   
      <div
        className="d-flex justify-content-center align-items-start flex-wrap"
        style={{ gap: "20px",  width:"100%"}}
      >
        {items.map((item, index) => (
          <div key={index} style={{ flex: "0 0 auto", width: "200px", }}>
            <img
              src={item.src}
              alt={item.name}
              className="img-fluid rounded"
              style={{ width: "200px", height: "220px", objectFit: "cover" }}
            />
            <p className="mt-2 text-center">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GallerySection;
