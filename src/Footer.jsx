import React from "react";

function Footer() {
  return (
    <footer
      className="pt-5"
      style={{ backgroundColor: "#bc8d57ff", color: "black" }}
    >
      <div className="container">
        <div className="row">
          {/* Brand Info */}
          <div className="col-md-4 mb-4">
            <h3 className="fw-bold"> NOVALIE BRAND</h3>
            <p className="mt-3">
             Bringing style home,one piece at a time.Crafted with love.Inspired by you
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled mt-3">
              <li>
                <a href="#about" className="text-black text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#collections" className="text-black text-decoration-none">
                  Collections
                </a>
              </li>
              <li>
                <a href="#shop" className="text-black text-decoration-none">
                  Shop
                </a>
              </li>
              <li>
                <a href="#contact" className="text-black text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Customer Service</h5>
            <ul className="list-unstyled mt-3">
              <li>
                <a href="#faq" className="text-black text-decoration-none">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#shipping" className="text-black text-decoration-none">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-black text-decoration-none">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-black text-decoration-none">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p className="mt-3 mb-1">📍 Karachi, Pakistan</p>
            <p className="mb-1">📞 +92 300 1234567</p>
            <p className="mb-3">✉️ info@lavishbrand.com</p>

            <div className="d-flex gap-3">
              <a href="#" className="text-black fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-black fs-5">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-black fs-5">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-black fs-5">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <hr className="border-light" />
        <div className="text-center py-3">
          <p className="mb-0">
            © {new Date().getFullYear()}  NOVALIE.Design to make your space unforgettable.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
