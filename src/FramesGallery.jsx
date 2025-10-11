// ===== FramesGallery.jsx =====
import React, { useState } from "react";
import styles from "./FramesGallery.module.css";

import frame1 from "./assets/Hom/frame.jpg";
import frame2 from "./assets/Hom/frame.jpg";
import frame3 from "./assets/Hom/frame.jpg";
import frame4 from "./assets/Hom/frame.jpg";
import frame5 from "./assets/Hom/frame.jpg";
import frame6 from "./assets/Hom/frame.jpg";
import frame7 from "./assets/Hom/frame.jpg";
import frame8 from "./assets/Hom/frame.jpg";
import frame9 from "./assets/Hom/frame.jpg";
import frame10 from "./assets/Hom/frame.jpg";
import frame11 from "./assets/Hom/frame.jpg";
import frame12 from "./assets/Hom/frame.jpg";
import frame13 from "./assets/Hom/frame.jpg";
import frame14 from "./assets/Hom/frame.jpg";
import frame15 from "./assets/Hom/frame.jpg";

function FramesGallery() {
  const [filter, setFilter] = useState("All");

  const frames = [
    { id: 1, name: "Classic Frame", price: "$18.99", category: "Wood", image: frame1 },
    { id: 2, name: "Golden Frame", price: "$22.50", category: "Metal", image: frame2 },
    { id: 3, name: "Modern Frame", price: "$19.99", category: "Modern", image: frame3 },
    { id: 4, name: "Rustic Frame", price: "$21.00", category: "Wood", image: frame4 },
    { id: 5, name: "Vintage Frame", price: "$24.50", category: "Vintage", image: frame5 },
    { id: 6, name: "Black Border Frame", price: "$16.75", category: "Metal", image: frame6 },
    { id: 7, name: "Diamond Frame", price: "$28.30", category: "Decorative", image: frame7 },
    { id: 8, name: "Photo Frame", price: "$15.20", category: "Wood", image: frame8 },
    { id: 9, name: "Long Frame", price: "$26.00", category: "Modern", image: frame9 },
    { id: 10, name: "Classic Border", price: "$17.99", category: "Vintage", image: frame10 },
    { id: 11, name: "White Elegant", price: "$23.49", category: "Decorative", image: frame11 },
    { id: 12, name: "Metallic Frame", price: "$20.00", category: "Metal", image: frame12 },
    { id: 13, name: "Carved Frame", price: "$27.80", category: "Vintage", image: frame13 },
    { id: 14, name: "Stylish Frame", price: "$18.50", category: "Modern", image: frame14 },
    { id: 15, name: "Glass Frame", price: "$25.90", category: "Decorative", image: frame15 },
  ];

  const filteredFrames =
    filter === "All" ? frames : frames.filter((f) => f.category === filter);

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.heading}>🖼️ Frames Gallery</h1>
        <div className={styles.filterContainer}>
          <label className={styles.filterLabel}>Filter:</label>
          <select
            className={styles.filterSelect}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Wood">Wood</option>
            <option value="Metal">Metal</option>
            <option value="Modern">Modern</option>
            <option value="Vintage">Vintage</option>
            <option value="Decorative">Decorative</option>
          </select>
        </div>
      </div>

      {/* Frames Grid */}
      <div className={styles.container}>
        {filteredFrames.map((frame) => (
          <div key={frame.id} className={styles.card}>
            <img src={frame.image} alt={frame.name} className={styles.image} />
            <div className={styles.info}>
              <h3 className={styles.title}>{frame.name}</h3>
              <p className={styles.price}>{frame.price}</p>
              <button className={styles.button}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FramesGallery;
