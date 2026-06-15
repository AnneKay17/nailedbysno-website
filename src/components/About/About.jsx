import "./About.css";

const About = () => {
    
  return (
    <section className="about" id="about">
      <div className="about-content">
        <span>About NailedBySno</span>

        <h2>Nail Care Made Pretty, Personal & Affordable</h2>

        <p>
          Hi, I'm Sno, the nail technician behind NailedBySno. I specialize in creating beautiful, long-lasting nail sets tailored to each client's style, whether that's timeless French tips, elegant nudes, bold custom designs, or fresh pedicures.
        </p>

        <div className="about-points">
          <div>
            <h4>Student Friendly</h4>
            <p>Affordable prices made with students in mind.</p>
          </div>

          <div>
            <h4>Custom Designs</h4>
            <p>From simple sets to creative nail art.</p>
          </div>

          <div>
            <h4>Based at Jubilee Hall</h4>
            <p>Easy to reach for students around campus.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;