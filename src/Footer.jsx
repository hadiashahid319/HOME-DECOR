
function Footer() {
  return (
    <footer
      className="pt-5"
      style={{ backgroundColor: "#E1D4C2", color: "#2c1b0c" }} // soft beige bg + dark wooden text
    >
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Brand Info */}
          <div className="col-12 col-md-4 mb-4">
            <h3
              className="fw-bold"
              style={{ color: "#51310d", fontFamily: "'Playfair Display', serif" }}
            >
              COZY CORNER
            </h3>
            <p className="mt-3" style={{ fontFamily: "'Merriweather', serif" }}>
              Bringing style home, one piece at a time. Crafted with love.  
              Inspired by you.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-2 mb-4">
            <h5 className="fw-bold" style={{ color: "#744c1e" }}>
              Quick Links
            </h5>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">About Us</li>
              <li className="mb-2">Collections</li>
              <li className="mb-2">Shop</li>
              <li className="mb-2">Contact</li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold" style={{ color: "#744c1e" }}>
              Customer Service
            </h5>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">FAQs</li>
              <li className="mb-2">Shipping & Returns</li>
              <li className="mb-2">Privacy Policy</li>
              <li className="mb-2">Terms & Conditions</li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold" style={{ color: "#744c1e" }}>
              Contact Us
            </h5>
            <p className="mt-3 mb-1">📍 Karachi, Pakistan</p>
            <p className="mb-1">📞 +92 300 1234567</p>
            <p className="mb-3">✉️ info@cozycorner.com</p>

            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="#" className="text-dark">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-dark">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="#" className="text-dark">
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a href="#" className="text-dark">
                <i className="bi bi-youtube fs-5"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <hr className="border-dark" />
        <div className="text-center py-3">
          <p className="mb-0" style={{ fontFamily: "'Merriweather', serif" }}>
            © {new Date().getFullYear()} <span style={{ color: "#51310d", fontWeight: "600" }}>COZY CORNER</span>.  
            Designed to make your space unforgettable.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
