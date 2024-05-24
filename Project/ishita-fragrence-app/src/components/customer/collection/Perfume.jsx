import React, { useState } from 'react';
import Product from '../Product';
import SideBar from '../SideBar';
import '../../customer/style.css';
import Header from '../Header';

const Perfume = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterSelection = (filters) => {
    setSelectedFilters(filters);
  };

  const products = [
    { name: 'Above&Beyond', image: 'https://isakfragrances.com/cdn/shop/files/26_615a513a-4c7d-4f04-99da-977d0b86c357.png?v=1700154599&width=1000' },
    { name: 'Crimson Oudh', image: 'https://isakfragrances.com/cdn/shop/files/38_9e732c51-1ce8-4267-88c9-57f94598a7a4.png?v=1686810191&width=1000' },
    { name: 'Cosmic Dance', image: 'https://isakfragrances.com/cdn/shop/files/Firefly20240201154944.png?v=1706782846&width=1000' },
    { name: 'Edge of Dreams', image: 'https://isakfragrances.com/cdn/shop/files/Firefly20240201160948.png?v=1706784041&width=1000' },
    { name: 'Sunshine & Me', image: 'https://isakfragrances.com/cdn/shop/files/31.png?v=1686758353&width=1000' },
    { name: 'Top Of The World', image: 'https://isakfragrances.com/cdn/shop/files/TopoftheWorld50ml_20231012_15334365.jpg?v=1697456434&width=1000' },
  ];

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    // Implement filter logic based on selectedFilters array
    return true; // Placeholder until actual filter logic is implemented
  });

  return (
    <div>
      <Header/>
      <img src='https://isakfragrances.com/cdn/shop/collections/WISH8669.jpg?v=1705887559&width=1600' alt='image1'/>
    <div className="perfume-container">
      <SideBar onFilter={handleFilterSelection} /> 
      <div className="perfume-list">
        
        {filteredProducts.map((product, index) => (
          <Product
            key={index}
            name={product.name}
            brand={product.brand}
            fragrance={product.fragrance}
            image={product.image}
            onAddToCart={() => console.log(`Added ${product.name} to cart`)}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Perfume;
