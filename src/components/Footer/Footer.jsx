import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>NailedBy<span>Sno</span></h3>

        <p>
          Affordable nail care, beautiful designs, and confidence at your
          fingertips.
        </p>

        <div className="footer-links">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://wa.me/27746652269?text=Hi%20Sno!%20I'd%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>

        <div className="footer-bottom">
          <p>© 2026 NailedBySno. All rights reserved.</p>
        </div>

        <p className="developer-credit">
            Designed & Developed by
            <a
                href="https://linkedin.com/in/karabo-makhubela-0bbb5b387"
                target="_blank"
                rel="noopener noreferrer"
            > Karabo Makhubela
            </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;