import React from 'react';
import '../styles/Carousel.css';

function Carousel() {
  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="carousel-item">
          <img src="path/to/your/image.jpg" alt="Mattress" />
          <div className="carousel-content">
            <h2>Mattress</h2>
            <p>From ₹2,999</p>
            <p>WafeFit, Sleepwell & more</p>
          </div>
        </div>
      </div>
      <div className="carousel-controls">
        <button className="prev">←</button>
        <button className="next">→</button>
      </div>
    </div>
  );
}

export default Carousel;
