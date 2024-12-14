import React from 'react'; 
import './Annimation.css'; 
import aerien from '../../assets/transport aérien.jpg'; 
import routier from '../../assets/transport routier.jpg'; 
import maritime from '../../assets/transport maritime.jpg'; 

// Functional component named Annimation
function Annimation() {
  return (
    // Main container for the slider
    <div className="slider-frame mt-10">
      {/* Container for the sliding images */}
      <div className="slide-images">
        {/* Individual image container for the first image */}
        <div className="img-container">
          <img 
            src={aerien} // Source of the first image
            alt="transport aérien" // Alt text for accessibility
          />
        </div>
        {/* Individual image container for the second image */}
        <div className="img-container">
          <img 
            src={routier} // Source of the second image
            alt="transport routier" // Alt text for accessibility
          />
        </div>
        {/* Individual image container for the third image */}
        <div className="img-container">
          <img 
            src={maritime} // Source of the third image
            alt="transport maritime" // Alt text for accessibility
          />
        </div>
      </div>
    </div>
  );
}

// Exporting the Annimation component for use in other parts of the application
export default Annimation;