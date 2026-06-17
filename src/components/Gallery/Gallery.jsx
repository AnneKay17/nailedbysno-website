import './Gallery.css'

import img1 from "../../assets/nail-tech-images/nails1.webp"
import img2 from "../../assets/nail-tech-images/nails2.webp"
import img3 from "../../assets/nail-tech-images/nails3.webp"
import img4 from "../../assets/nail-tech-images/nails4.webp"
import img5 from "../../assets/nail-tech-images/nails5.webp"
import img6 from "../../assets/nail-tech-images/nails6.webp"
import img7 from "../../assets/nail-tech-images/nails7.webp"
import img8 from "../../assets/nail-tech-images/nails8.webp"
import img9 from "../../assets/nail-tech-images/nails9.webp"
import img10 from "../../assets/pedicure/pedi1.webp"
import img11 from "../../assets/pedicure/pedi3.webp"


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
            title: "Milky pedi",
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