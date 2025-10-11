import React, { useState } from "react";
import styles from "./CandleGallery.module.css";

import candle1 from "./assets/Hom/candle.jpg";
import candle2 from "./assets/Hom/candle.jpg";
import candle3 from "./assets/Hom/candle.jpg";
import candle4 from "./assets/Hom/candle.jpg";
import candle5 from "./assets/Hom/candle.jpg";
import candle6 from "./assets/Hom/candle.jpg";
import candle7 from "./assets/Hom/candle.jpg";
import candle8 from "./assets/Hom/candle.jpg";
import candle9 from "./assets/Hom/candle.jpg";
import candle10 from "./assets/Hom/candle.jpg";
import candle11 from "./assets/Hom/candle.jpg";
import candle12 from "./assets/Hom/candle.jpg";
import candle13 from "./assets/Hom/candle.jpg";
import candle14 from "./assets/Hom/candle.jpg";
import candle15 from "./assets/Hom/candle.jpg";

function CandlesGallery() {
  const [selectedCandle, setSelectedCandle] = useState(null);
  const [filter, setFilter] = useState("All");

  const candles = [
    { id: 1, name: "Vanilla Bliss", price: "$12.99", category: "Sweet", image: candle1 },
    { id: 2, name: "Lavender Dreams", price: "$14.50", category: "Floral", image: candle2 },
    { id: 3, name: "Ocean Mist", price: "$13.00", category: "Fresh", image: candle3 },
    { id: 4, name: "Rose Delight", price: "$15.25", category: "Floral", image: candle4 },
    { id: 5, name: "Lemon Zest", price: "$10.99", category: "Citrus", image: candle5 },
    { id: 6, name: "Coconut Breeze", price: "$11.50", category: "Tropical", image: candle6 },
    { id: 7, name: "Amber Glow", price: "$16.00", category: "Warm", image: candle7 },
    { id: 8, name: "Forest Pine", price: "$13.75", category: "Woody", image: candle8 },
    { id: 9, name: "Berry Bloom", price: "$12.25", category: "Fruity", image: candle9 },
    { id: 10, name: "Caramel Spice", price: "$14.99", category: "Sweet", image: candle10 },
    { id: 11, name: "Mint Fresh", price: "$11.25", category: "Fresh", image: candle11 },
    { id: 12, name: "Cinnamon Charm", price: "$13.40", category: "Warm", image: candle12 },
    { id: 13, name: "Floral Essence", price: "$15.00", category: "Floral", image: candle13 },
    { id: 14, name: "Vanilla Woods", price: "$12.80", category: "Sweet", image: candle14 },
    { id: 15, name: "Midnight Musk", price: "$16.50", category: "Woody", image: candle15 },
  ];

  const filteredCandles =
    filter === "All" ? candles : candles.filter((c) => c.category === filter);

  return (
    <div className={styles.wrapper}>
      {/* 🔹 Header */}
      <div className={styles.header}>
        <h1 className={styles.heading}>🕯️ Candles Gallery</h1>

        <div className={styles.filterContainer}>
          <label className={styles.filterLabel}>Filter:</label>
          <select
            className={styles.filterSelect}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Sweet">Sweet</option>
            <option value="Floral">Floral</option>
            <option value="Fresh">Fresh</option>
            <option value="Warm">Warm</option>
            <option value="Woody">Woody</option>
            <option value="Citrus">Citrus</option>
            <option value="Tropical">Tropical</option>
            <option value="Fruity">Fruity</option>
          </select>
        </div>
      </div>

      {/* 🔹 Candles Grid */}
      <div className={styles.container}>
        {filteredCandles.map((candle) => (
          <div
            key={candle.id}
            className={styles.card}
          >
            <img src={candle.image} alt={candle.name} className={styles.image} />
            <div className={styles.info}>
              <h3 className={styles.title}>{candle.name}</h3>
              <p className={styles.price}>{candle.price}</p>
              <button className={styles.button}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Modal */}
      {selectedCandle && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedCandle(null)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2>{selectedCandle.name}</h2>
            <p>Price: {selectedCandle.price}</p>
            <img
              src={selectedCandle.image}
              alt={selectedCandle.name}
              style={{ width: "100%", borderRadius: "12px" }}
            />
            <button
              className={styles.closeButton}
              onClick={() => setSelectedCandle(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CandlesGallery;
