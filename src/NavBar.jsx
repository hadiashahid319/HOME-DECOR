function Navbar() {
  return (
    <header>
      {/* Top Row */}
      <div className="d-flex justify-content-between align-items-center px-4 py-2 border-bottom" style={{background:"#bc8d57ff"}}>
        {/* Search Icon */}
        <i className="bi bi-search fs-5"></i>

        {/* Logo */}
        <h1
          className="m-0"
          style={{ fontFamily: "serif", letterSpacing: "5px" }}
        >
          NOVALIE
        </h1>

        {/* Social Icons */}
        <div className="d-flex gap-3 fs-5">
          <i className="bi bi-twitter"></i>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-bag"></i>
        </div>
      </div>

      {/* Bottom Row - Navigation Links */}
      <nav className="d-flex justify-content-center gap-4 py-2 border-bottom"  style={{background:"#bc8d57ff"}}>
        <a href="#" className="text-dark text-decoration-none">Home</a>
        <a href="#" className="text-dark text-decoration-none">Shop</a>
        <a href="#" className="text-dark text-decoration-none">Blog</a>
        <a href="#" className="text-dark text-decoration-none">About</a>
        <a href="#" className="text-dark text-decoration-none">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;