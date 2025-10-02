import React from "react";

function Bar() {
  return (
    <header>
      {/* Top Row */}
      <div
        className="d-flex flex-wrap justify-content-between align-items-center px-3 py-2 border-bottom"
        style={{ background: "#bc8d57ff" }}
      >
        {/* Search Box */}
        <div className="d-flex align-items-center order-2 order-md-1 mt-2 mt-md-0">
          <i className="bi bi-search fs-5 me-2"></i>
          <input
            type="text"
            placeholder="Search..."
            className="form-control"
            style={{
              maxWidth: "160px",
              borderRadius: "20px",
              fontSize: "0.9rem",
            }}
          />
        </div>

        {/* Logo / Title */}
        <h1
          className="m-0 text-center order-1 flex-grow-1"
          style={{
            fontFamily: "serif",
            letterSpacing: "5px",
            fontSize: "clamp(1.2rem, 4vw, 2rem)",
            cursor: "pointer",
          }}
        >
          NOVALIE
        </h1>

        {/* Right Side Icons + Cart */}
        <div className="d-flex justify-content-center justify-content-md-end gap-3 fs-5 align-items-center order-3 mt-2 mt-md-0">
          <a href="#" className="text-dark">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" className="text-dark">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="text-dark">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="btn btn-outline-dark p-1 px-2">
            <i className="bi bi-bag"></i>
          </a>
        </div>
      </div>

      {/* Navigation Links Row */}
      <nav
        className="border-bottom d-flex flex-wrap justify-content-center gap-4 py-2"
        style={{ background: "#bc8d57ff" }}
      >
        <a href="#" className="text-dark text-decoration-none">
          Home
        </a>
        <a href="#" className="text-dark text-decoration-none">
          About
        </a>
        <a href="#" className="text-dark text-decoration-none">
          Blog
        </a>
        <a href="#" className="text-dark text-decoration-none">
          Categories
        </a>
        <a href="#" className="text-dark text-decoration-none">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Bar;
