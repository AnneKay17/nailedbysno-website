import './Gallery.css'

import img1 from "../../assets/nail-tech-images/nails1.jpeg"
import img2 from "../../assets/nail-tech-images/nails2.jpeg"
import img3 from "../../assets/nail-tech-images/nails3.jpeg"
import img4 from "../../assets/nail-tech-images/nails4.jpeg"
import img5 from "../../assets/nail-tech-images/nails5.jpeg"
import img6 from "../../assets/nail-tech-images/nails6.jpeg"
import img7 from "../../assets/nail-tech-images/nails7.jpeg"
import img8 from "../../assets/nail-tech-images/nails8.jpeg"
import img9 from "../../assets/nail-tech-images/nails9.jpeg"
import img10 from "../../assets/pedicure/pedi1.jpeg"
import img11 from "../../assets/pedicure/pedi3.jpeg"


const Gallery = () => {
    const galleryImages = [
        { 
            image: img2, 
            title: "Cherry French",
            size: "normal"
        },
        { 
            image: img1, 
            title: "Golden Bloom",
            size: "tall" 
        },
        { 
            image: img3, 
            title: "Soft French",
            size: "tall"
        },
        { 
            image: img4, 
            title: "Golden Waves",
            size: "tall" 
            
        },
        { 
            image: img5, 
            title: "Wild Touch",
            size: "normal"
        },
        { 
            image: img6, 
            title: "Classic French",
            size: "tall"
        },
        { 
            image: img7, 
            title: "Midnight Gloss",
            size: "normal"
        },
        { 
            image: img8, 
            title: "Petal Bloom",
            size: "normal"
        },
        { 
            image: img9, 
            title: "Daisy Nude",
            size: "tall"
            
        },
        { 
            image: img10, 
            title: "Blue Pedi",
            size: "small"
             
        },
        {
            image: img11, 
            title: "French Pedicure",
            size: "small"
        },
        
        
    ];

    return (
        <section className="gallery" id="gallery">
            <div className="gallery-header">
                <span>Gallery</span>
                <h2>Explore More Sets</h2>
                <p>
                Browse a selection of recent sets, from timeless classics to bold
                custom designs.
                </p>
            </div>

            <div className="gallery-grid">
                {galleryImages.map((item, index) => (
                <div  className={`gallery-card ${item.size || ""}`} key={index}>
                    <img src={item.image} alt={item.title} />

                    <div className="gallery-overlay">
                    <p>{item.title}</p>
                    </div>
                </div>
                ))}
            </div>
        </section>
    );
}
 
export default Gallery;