import React, { useState } from "react";
import styles from "./MirrorsGallery.module.css";

import mirror1 from "./assets/Hom/mirror.jpg";
import mirror2 from "./assets/Hom/mirror.jpg";
import mirror3 from "./assets/Hom/mirror.jpg";
import mirror4 from "./assets/Hom/mirror.jpg";
import mirror5 from "./assets/Hom/mirror.jpg";
import mirror6 from "./assets/Hom/mirror.jpg";
import mirror7 from "./assets/Hom/mirror.jpg";
import mirror8 from "./assets/Hom/mirror.jpg";
import mirror9 from "./assets/Hom/mirror.jpg";
import mirror10 from "./assets/Hom/mirror.jpg";
import mirror11 from "./assets/Hom/mirror.jpg";
import mirror12 from "./assets/Hom/mirror.jpg";
import mirror13 from "./assets/Hom/mirror.jpg";
import mirror14 from "./assets/Hom/mirror.jpg";
import mirror15 from "./assets/Hom/mirror.jpg";

function MirrorsGallery() {
  const [selectedMirror, setSelectedMirror] = useState(null);
  const [filter, setFilter] = useState("All");

  const mirrors = [
    { id: 1, name: "Classic Round Mirror", price: "$29.99", category: "Round", image: mirror1 },
    { id: 2, name: "Golden Frame Mirror", price: "$34.50", category: "Framed", image: mirror2 },
    { id: 3, name: "Vintage Wall Mirror", price: "$39.99", category: "Vintage", image: mirror3 },
    { id: 4, name: "Rustic Wood Mirror", price: "$32.00", category: "Wooden", image: mirror4 },
    { id: 5, name: "Minimalist Oval Mirror", price: "$27.50", category: "Oval", image: mirror5 },
    { id: 6, name: "Luxury Vanity Mirror", price: "$45.00", category: "Vanity", image: mirror6 },
    { id: 7, name: "Decorative Wall Mirror", price: "$38.00", category: "Decorative", image: mirror7 },
    { id: 8, name: "Antique Gold Mirror", price: "$41.50", category: "Vintage", image: mirror8 },
    { id: 9, name: "Full-Length Mirror", price: "$55.00", category: "Standing", image: mirror9 },
    { id: 10, name: "Square Frame Mirror", price: "$30.99", category: "Framed", image: mirror10 },
    { id: 11, name: "Oval Accent Mirror", price: "$28.25", category: "Oval", image: mirror11 },
    { id: 12, name: "Modern LED Mirror", price: "$49.99", category: "Vanity", image: mirror12 },
    { id: 13, name: "Wood Trim Mirror", price: "$33.80", category: "Wooden", image: mirror13 },
    { id: 14, name: "Curved Edge Mirror", price: "$29.75", category: "Round", image: mirror14 },
    { id: 15, name: "Designer Wall Mirror", price: "$60.00", category: "Decorative", image: mirror15 },
  ];

  const filteredMirrors =
    filter === "All" ? mirrors : mirrors.filter((m) => m.category === filter);

  return (
    <div className={styles.wrapper}>
      {/* 🔹 Header */}
      <div className={styles.header}>
        <h1 className={styles.heading}>🪞 Mirrors Gallery</h1>

        <div className={styles.filterContainer}>
          <label className={styles.filterLabel}>Filter:</label>
          <select
            className={styles.filterSelect}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Round">Round</option>
            <option value="Framed">Framed</option>
            <option value="Vintage">Vintage</option>
            <option value="Wooden">Wooden</option>
            <option value="Oval">Oval</option>
            <option value="Vanity">Vanity</option>
            <option value="Decorative">Decorative</option>
            <option value="Standing">Standing</option>
          </select>
        </div>
      </div>

      {/* 🔹 Mirror Cards Grid */}
      <div className={styles.container}>
        {filteredMirrors.map((mirror) => (
          <div
            key={mirror.id}
            className={styles.card}
          
          >
            <img src={mirror.image} alt={mirror.name} className={styles.image} />
            <div className={styles.info}>
              <h3 className={styles.title}>{mirror.name}</h3>
              <p className={styles.price}>{mirror.price}</p>
              <button className={styles.button}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Modal */}
      {selectedMirror && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedMirror(null)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2>{selectedMirror.name}</h2>
            <p>Price: {selectedMirror.price}</p>
            <img
              src={selectedMirror.image}
              alt={selectedMirror.name}
              style={{ width: "100%", borderRadius: "12px" }}
            />
            <button
              className={styles.closeButton}
              onClick={() => setSelectedMirror(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MirrorsGallery;
