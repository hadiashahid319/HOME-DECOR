import React from "react";

function Footer() {
  return (
    <footer
      className="pt-5"
      style={{ backgroundColor: "#bc8d57ff", color: "black" }}
    >
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Brand Info */}
          <div className="col-12 col-md-4 mb-4">
            <h3 className="fw-bold">NOVALIE BRAND</h3>
            <p className="mt-3">
              Bringing style home, one piece at a time. Crafted with love.
              Inspired by you.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-2 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled mt-3">
              <li>About Us</li>
              <li>Collections</li>
              <li>Shop</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold">Customer Service</h5>
            <ul className="list-unstyled mt-3">
              <li>FAQs</li>
              <li>Shipping & Returns</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p className="mt-3 mb-1">📍 Karachi, Pakistan</p>
            <p className="mb-1">📞 +92 300 1234567</p>
            <p className="mb-3">✉️ info@lavishbrand.com</p>

            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <i className="bi bi-facebook fs-5"></i>
              <i className="bi bi-instagram fs-5"></i>
              <i className="bi bi-twitter fs-5"></i>
              <i className="bi bi-youtube fs-5"></i>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <hr className="border-light" />
        <div className="text-center py-3">
          <p className="mb-0">
            © {new Date().getFullYear()} NOVALIE. Design to make your space unforgettable.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
