// Bar.jsx
import React from "react";
import styles from "./Bar.module.css";
import logo from "./assets/HOM/logo.png";

function Bar() {
  return (
    <header>
      {/* 🔹 Top Bar */}
      <div className={styles.topBar}>
        {/* Logo */}
        <div className={styles.logoBox}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>

        {/* Title */}
        <h1 className={styles.title}>COZY CORNER</h1>

        {/* 🔹 Search + Icons */}
        <div className={styles.rightSection}>
          <div className={styles.searchBox}>
            <i className="bi bi-search"></i>
            <input type="text" placeholder="Search..." />
          </div>

          <div className={styles.icons}>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
          </div>

          <button className={styles.cartBtn}>
            <i className="bi bi-bag"></i>
          </button>
        </div>
      </div>

      {/* 🔹 Navigation Menu */}
      <nav className={styles.navBar}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Shop</a>
        <a href="#">Categories</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Bar;
