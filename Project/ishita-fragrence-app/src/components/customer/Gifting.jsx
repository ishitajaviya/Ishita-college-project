import { useState } from 'react';
import Product from './Product';
import SideBar from './SideBar';
import './style.css';
import Header from './Header';

const Gifting = () => {
  


  const products = [
    { name: 'Discoverys pack of perfumes', image: 'https://isakfragrances.com/cdn/shop/files/Addaheading_4.png?v=1693822953&width=1000' },
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
  
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterSelection = (filters) => {
    setSelectedFilters(filters);
  };


  return (
    <div>
      
      <Header/>

      <img src='https://isakfragrances.com/cdn/shop/collections/WISH8613.jpg?v=1705884863&width=1600&height=700' alt='image1'/>
      
    <div className="perfume-container">
    <SideBar onFilter={handleFilterSelection} /> 
     {/* Pass the handleFilterSelection function as a prop */}
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

export default Gifting;
