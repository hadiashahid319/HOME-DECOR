import React from "react";
import logo from "./assets/HOM/logo.png";

function Bar() {
  return (
    <header>
      {/* Top Row */}
      <div
        className="d-flex flex-wrap justify-content-between align-items-center px-3 py-2 border-bottom"
        style={{ background: "#6E473B" }} // rich wood brown
      >
        {/* Left Logo */}
        <div className="d-flex align-items-center order-0">
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "55px",
              height: "55px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #E1D4C2",
              cursor: "pointer",
            }}
          />
        </div>

        {/* Title */}
        <h1
          className="m-0 text-center order-1 flex-grow-1"
          style={{
            fontFamily: "serif",
            letterSpacing: "4px",
            fontSize: "clamp(1.3rem, 4vw, 2rem)",
            cursor: "pointer",
            color: "#E1D4C2",
            paddingLeft:"10%"
          }}
        >
          COZY CORNER
        </h1>

        {/* Right Side: Search + Icons */}
        <div className="d-flex align-items-center gap-3 order-2">
          {/* Search */}
          <div className="d-flex align-items-center me-2">
            <i className="bi bi-search fs-5 me-2" style={{ color: "#E1D4C2" }}></i>
            <input
              type="text"
              placeholder="Search..."
              className="form-control"
              style={{
                maxWidth: "160px",
                borderRadius: "20px",
                fontSize: "0.9rem",
                border: "1px solid #BEB5A9",
              }}
            />
          </div>

          {/* Social Icons */}
          {["twitter", "facebook", "instagram"].map((icon) => (
            <a key={icon} href="#" style={{ color: "#E1D4C2" }}>
              <i className={`bi bi-${icon}`}></i>
            </a>
          ))}

          {/* Cart */}
          <a
            href="#"
            className="btn p-1 px-2"
            style={{
              border: "1px solid #BEB5A9",
              color: "#E1D4C2",
              background: "transparent",
            }}
          >
            <i className="bi bi-bag"></i>
          </a>
        </div>
      </div>

      {/* Navigation Links */}
      <nav
  className="border-bottom d-flex flex-wrap justify-content-center gap-4 py-2"
  style={{ background: "#A78D78", paddingRight: "10%" }}
>
  <a href="#" className="text-decoration-none" style={{ color: "#291C0E", fontWeight: "600" }}>
    Home
  </a>
  <a href="#" className="text-decoration-none" style={{ color: "#291C0E", fontWeight: "600" }}>
    About
  </a>
  <a href="#" className="text-decoration-none" style={{ color: "#291C0E", fontWeight: "600" }}>
    Shop
  </a>
  <a href="#" className="text-decoration-none" style={{ color: "#291C0E", fontWeight: "600" }}>
    Categories
  </a>
  <a href="#" className="text-decoration-none" style={{ color: "#291C0E", fontWeight: "600" }}>
    Contact
  </a>
</nav>

    </header>
  );
}

export default Bar;
