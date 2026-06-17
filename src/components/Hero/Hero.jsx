import "./Hero.css";
import heroImage from '../../assets/nail-tech-images/hero-nails.webp'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-tag">Nail care • Nail art • Pedicures</p>

        <h1>Beautiful Nails. Beautiful Confidence.</h1>

        <p className="hero-text">
          Custom nail sets, French tips, pedicures and nail art made to match
          your style.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn primary-btn">
            Book Appointment
          </a>

          <a href="#gallery" className="btn secondary-btn">
            View Gallery
          </a>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <img src={heroImage} alt="Elegant French tip nails" />
      </div>
    </section>
  );
}

export default Hero;