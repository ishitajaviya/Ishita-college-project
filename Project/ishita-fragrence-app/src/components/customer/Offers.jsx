import React from 'react';
import './style.css'; // Import your CSS file
import Header from './Header'; 

const Offers = () => {

      return (
        <div className="isak-offers-container">
          <Header/>

        <div className="isak-offers-text">
            <h2>ISHITA OFFERS</h2>
            <p>Use Code FIRSTISHITA at checkout on your first order to get a 10% off</p>
        </div>

          <img
            className="isak-offers-image"
            src="https://cdn.shopify.com/s/files/1/1036/0119/files/isak_banner_2023-3_1024x1024.png?v=1700643324" // Replace with the actual path to your image
            alt="Isak Offers"
          />
          
        </div>
      );
    };
    
export default Offers;
