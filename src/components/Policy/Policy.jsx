import "./Policy.css";

const Policy = () => {
  return (
    <section className="policy" id="policy">
      <div className="policy-header">
        <span>Booking Policy</span>
        <h2>Before Your Appointment</h2>
        <p>
          Please review the information below before booking your appointment.
        </p>
      </div>

      <div className="policy-grid">

        <div className="policy-card">
          <h3>Booking & Payments</h3>
          <ul>
            <li>R50 non-refundable deposit required.</li>
            <li>No deposit, no booking.</li>
            <li>Balance payable after the appointment.</li>
            <li>Immediate payments only.</li>
          </ul>
        </div>

        <div className="policy-card">
          <h3>Appointment Preparation</h3>
          <ul>
            <li>Please arrive with clean, bare nails.</li>
            <li>Existing gel or polish will be charged as a soak-off.</li>
            <li>Book a soak-off beforehand to allow enough time.</li>
          </ul>
        </div>

        <div className="policy-card">
          <h3>Late Arrivals</h3>
          <ul>
            <li>15-minute grace period allowed.</li>
            <li>Late arrivals incur a 20% fee.</li>
            <li>After 30 minutes the appointment is cancelled.</li>
          </ul>
        </div>

        <div className="policy-card">
          <h3>Service Policy</h3>
          <ul>
            <li>Please raise concerns during the appointment.</li>
            <li>Changes cannot be made after curing.</li>
            <li>No refunds after the service is completed.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Policy;