import Navbar from "./Bar";

function NavbarHandler() {
  // search function
  const handleSearch = (query) => {
    alert(`🔍 Searching for: ${query}`);
    // yaha API call ya navigate("/search?query=" + query) bhi kar sakte ho
  };

  // navigation function
  const handleNavClick = (page) => {
    alert(`📌 Navigating to: ${page}`);
    // yaha react-router use kar ke navigate("/" + page) kar sakte ho
  };

  return <Navbar onSearch={handleSearch} onNavClick={handleNavClick} />;
}

export default NavbarHandler;
