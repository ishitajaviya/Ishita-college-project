import React, { useState } from 'react';
import Gifting from './Gifting';
import Cart from './Cart';

const ParentComponent = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      {/* Pass the addToCart function as a prop to Gifting */}
      <Gifting addToCart={addToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default ParentComponent;
