import Hamburger from "./navigation/hamburger";
import Navbar from "./navigation/navbar";

const Header = () => {
  if (window.matchMedia("(min-width: 600px)").matches) {
    return (
      <nav className="p-5 flex items-center fixed z-50" id="desktop-tablet-nav">
        <Navbar />
      </nav>
    );
  } else {
    return (
      <nav className="p-5 flex items-center fixed z-50" id="mobile-nav">
        <Hamburger />
      </nav>
    );
  }
};

export default Header;
