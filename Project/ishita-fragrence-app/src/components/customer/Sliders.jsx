import React, { useState, useEffect } from 'react';

import sliders from '../../images/sliders.webp';
import sliders1 from '../../images/sliders1.webp';
import './style.css'; // Assuming you have a CSS file for styling

export default function Sliders() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 2); 
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='slider-container'>
      <div className='slide-wrapper' style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        <img src={sliders} alt='sliders' className='slide-image' />
        <img src={sliders1} alt='slider1' className='slide-image' />
      </div>
    </div>
  );
}
