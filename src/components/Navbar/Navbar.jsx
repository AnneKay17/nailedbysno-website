import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#hero" className="logo">
        NailedBy<span>Sno</span>
      </a>

      <ul className="nav-links">
        <li>
          <a href="#services">Services</a>
        </li>

        <li>
          <a href="#gallery">Gallery</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>
      </ul>

      <a href="#contact" className="contact-btn">
        Contact
      </a>
    </nav>
  );
};

export default Navbar;