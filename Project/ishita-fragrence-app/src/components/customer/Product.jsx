import React from 'react';

const Product = ({ name, brand, fragrance, image, onAddToCart }) => {
  return (
    <div className="product">
      <a href={`/products/${name}`} className="product-link"> {/* Link to the full description page */}
        <img src={image} alt={name} className="product-image" />
      </a>
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-brand">{brand}</p>
        <p className="product-fragrance">{fragrance}</p>
        <button onClick={onAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
