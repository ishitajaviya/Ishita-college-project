// OrderInfoComponent.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faFlask, faGift, faLock } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const OrderInfoComponent = () => {
  return (
    <div className="order-info-container">
      <div className="order-info-item">
        <FontAwesomeIcon icon={faTruck} size="2x" />
        <p>FREE DOMESTIC DELIVERY</p>
        <p>On all orders above INR 1000</p>
      </div>
      <div className="order-info-item">
        <FontAwesomeIcon icon={faFlask} size="2x" />
        <p>FREE SAMPLE</p>
        <p>Not applicable on Discovery Packs</p>
      </div>
      <div className="order-info-item">
        <FontAwesomeIcon icon={faGift} size="2x" />
        <p>GIFT-WRAP</p>
        <p>Gift wrap your order along with the handwritten Note</p>
      </div>
      <div className="order-info-item">
        <FontAwesomeIcon icon={faLock} size="2x" />
        <p>SECURE PAYMENTS</p>
        <p>Encrypted data to ensure payment security</p>
      </div>
    </div>
  );
};

export default OrderInfoComponent;
