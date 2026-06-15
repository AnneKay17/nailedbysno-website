import './Services.css'

const Services = () => {
   
    return (
        <section className="services" id="services">
            <div className="services-header">
                <span>Services & Pricing</span>

                <h2>Choose Your Perfect Set</h2>

                <p>
                From everyday elegance to custom nail art, every appointment is
                designed to leave you feeling confident and beautiful.
                </p>
            </div>

            <div className="services-grid">
                {/* Manicure */}
                <div className="service-card">
                <h3>Plain Manicure</h3>

                <div className="service-row">
                    <span>Polygel Short</span>
                    <span>R150</span>
                </div>

                <div className="service-row">
                    <span>Polygel Medium</span>
                    <span>R170</span>
                </div>

                <div className="service-row">
                    <span>Polygel Long</span>
                    <span>R200</span>
                </div>

                <div className="service-row">
                    <span>Rubberbase</span>
                    <span>R110</span>
                </div>

                <div className="service-row">
                    <span>Polygel Overlay</span>
                    <span>R120</span>
                </div>

                <div className="service-row">
                    <span>Gel Overlay</span>
                    <span>R100</span>
                </div>

                <div className="service-row">
                    <span>Buff & Shine</span>
                    <span>R50</span>
                </div>
                </div>

                {/* Pedicure */}
                <div className="service-card">
                <h3>Plain Pedicure</h3>

                <div className="service-row">
                    <span>Gel Overlay</span>
                    <span>R100</span>
                </div>

                <div className="service-row">
                    <span>Rubberbase</span>
                    <span>R110</span>
                </div>

                <div className="service-row">
                    <span>Polygel</span>
                    <span>R120</span>
                </div>
                </div>

                {/* Nail Art */}
                <div className="service-card">
                <h3>Nail Art</h3>

                <div className="service-row">
                    <span>French Tip</span>
                    <span>R5 / nail</span>
                </div>

                <div className="service-row">
                    <span>Chrome</span>
                    <span>R5 / nail</span>
                </div>

                <div className="service-row">
                    <span>3D Design</span>
                    <span>R10 / nail</span>
                </div>
                </div>

                {/* Extensions */}
                <div className="service-card">
                <h3>Extensions & Removal</h3>

                <div className="service-row">
                    <span>Soak-off</span>
                    <span>R50</span>
                </div>

                <div className="service-row">
                    <span>Foreign Soak-off</span>
                    <span>R80</span>
                </div>
                </div>
            </div>

            <div className="service-notes">
                <p>* Nail art pricing is charged per nail.</p>
                <p>* Additional custom designs may affect pricing.</p>
            </div>
        </section>
    );
}
 
export default Services;