import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
        <div className="contact-container">
            <span>Book Your Appointment</span>

            <h2>Ready For Your Next Set?</h2>

            <p>
            Whether you're looking for a classic set, custom nail art,
            or a fresh pedicure, I'd love to help bring your vision to life.
            </p>

            <a
            href="https://wa.me/27746652269?text=Hi%20Sno!%20I'd%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="booking-btn"
            >
            Book via WhatsApp
            </a>

            <div className="contact-info">
            <div>
                <h4>Location</h4>
                <p>Jubilee Hall</p>
            </div>

            </div>
        </div>

        <div className="policy-reminder">
            <p>Please review the booking policy before making an appointment.</p>

            <a href="#policy" className="policy-btn">
                View Booking Policy
            </a>
        </div>
    </section>
  );
};

export default Contact;