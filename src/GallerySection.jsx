import PIC from "./assets/HOM/mirror1.jpg";
import second from "./assets/HOM/5.jpg";
import third from "./assets/HOM/vase.jpg";
import fourth from "./assets/HOM/2.jpg";
import styles from "./GallerySection.module.css"; // ✅ CSS module import

function GallerySection() {
  const items = [
    { src: PIC, name: "MIRRORS" },
    { src: second, name: "CANDLES" },
    { src: third, name: "VASES" },
    { src: fourth, name: "FRAMES" },
  ];

  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className="container py-5">
        <h2 className={styles.title}>OUR COLLECTION</h2>

        <div className="row g-4 justify-content-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-3 text-center"
            >
              <div className={styles.card}>
                <img src={item.src} alt={item.name} className={styles.image} />
                <p className={styles.name}>{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
