import one from "./assets/HOM/mirror.jpg";
import two from "./assets/HOM/candle.jpg";
import three from "./assets/HOM/view.jpg";
import four from "./assets/HOM/2.jpg";
import five from "./assets/HOM/3.jpg";
import six from "./assets/HOM/4.jpg";
import sev from "./assets/HOM/6.jpg";
import eig from "./assets/HOM/7.jpg";
import nim from "./assets/HOM/one.jpg";

function MostSaledItem() {
  // Array of images with name
  const items = [
    { src: one, name: "MIRROR" },
    { src: two, name: "CANDLE" },
    { src: three, name: "VASE" },
    { src: four, name: "FRAME" },
    { src: five, name: "VASE" },
    { src: six, name: "POTS" },
    { src: sev, name: "POTS" },
    { src: eig, name: "DECOR" },
    { src: nim, name: "VASE" },
  ];

  return (
    <div className="container py-5">
      {/* Title */}
      <h2 className="text-center mb-4" style={{ fontFamily: "serif" }}>
        MOST SALED ITEMS
      </h2>

      {/* Bootstrap Grid */}
      <div className="row">
        {items.map((item, index) => (
          <div key={index} className="col-md-4 mb-4 d-flex justify-content-center">
            <div style={{ width: "200px" }}>
              <img
                src={item.src}
                alt={item.name}
                className="img-fluid rounded"
                style={{ width: "200px", height: "220px", objectFit: "cover" }}
              />
              <p className="mt-2 text-center">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MostSaledItem;