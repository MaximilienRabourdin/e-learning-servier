import React, { useState, useRef } from "react";
import "./SlidePatientHistory.css"; // Importez le fichier CSS

const SlidePatientHistory = ({ slideData }) => {
  const { title, text } = slideData;
  const [isZoomed, setIsZoomed] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Suivez l'index de l'image actuellement affichée
  const [zoomCoordinates, setZoomCoordinates] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  const handleImageClick = (index, event) => {
    // Inversez l'état du zoom lorsque l'utilisateur clique sur l'image
    setIsZoomed(!isZoomed);
    setCurrentImageIndex(index);

    // Obtenez les coordonnées du clic par rapport à l'image
    const rect = imageRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setZoomCoordinates({ x, y });
  };

  const slideImage = {
    // ...
    images: [
      { src: "/thoraco-abdomino.png", alt: "Image 1" },
    ],
  };

  return (
    <div className={`slide_content_thoraco-abdomino ${isZoomed ? "zoomed" : ""}`}>
      <div className="left_section">
        {slideImage.images.map((image, index) => (
          <img
            key={index}
            ref={imageRef}
            className={`zoomable-image ${isZoomed && index === currentImageIndex ? "zoomed" : ""}`}
            src={image.src}
            alt={image.alt}
            onClick={(event) => handleImageClick(index, event)} // Écoutez le clic de l'utilisateur
          />
        ))}
      </div>

      <div className="right_section">
        <div className="presentation_slide" id="content_text_slide_patient">
          <p>
            {text.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlidePatientHistory;
