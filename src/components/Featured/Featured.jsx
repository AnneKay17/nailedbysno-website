import './Featured.css'

import nails1 from '../../assets/nail-tech-images/feat1.webp'
import nails2 from '../../assets/nail-tech-images/feat2.webp'
import nails3 from '../../assets/pedicure/pedi2.webp'

const Featured = () => {
    return (
        <section className="featured-work" id="work">
            <div className="featured-header">
                <span>Client Favourites</span>
                <h2>Sets Made With Detail & Care</h2>
                <p>
                A few client favourites, from soft French tips to detailed custom
                designs.
                </p>
            </div>

            <div className="featured-grid">
                <div className="featured-card large-card">
                <img src={nails1} alt="White French tip nails" />
                </div>

                <div className="featured-card">
                <img src={nails2} alt="Pink nail design" />
                </div>

                <div className="featured-card">
                <img src={nails3} alt="Red French tip nails" />
                </div>
            </div>

            <div className="featured-btn-wrapper">
                <a href="#gallery" className="featured-btn">
                    Explore full set
                </a>
            </div>
        </section>
    );
}
 
export default Featured;