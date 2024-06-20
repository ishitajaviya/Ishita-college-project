
import React from 'react';
import './style.css';

const AmbientSprays = () => {
  const collections = [
    {
      title: 'FRESH WAVES AIR FRESHENER',
      price:'RS. 390.00',
      imageUrl: 'https://isakfragrances.com/cdn/shop/files/Photoroom_20240314_215255.jpg?v=1710489351&width=500',
    },
    {
      title: 'CITRUS BURST AIR FRESHENER',
      price:'RS. 390.00',
      imageUrl: 'https://isakfragrances.com/cdn/shop/files/Photoroom_20240314_211651.jpg?v=1710489007&width=500',
    },
    {
      title: 'GREEN WOODS AIR FRESHENER',
      price:'RS. 390.00',
      imageUrl: 'https://isakfragrances.com/cdn/shop/files/Photoroom_20240314_214851.jpg?v=1710490034&width=500',
    },
    {
      title: 'ROSE WONDER AIR FRESHENER',
      price:'RS. 390.00',
      imageUrl: 'https://isakfragrances.com/cdn/shop/files/Photoroom_20240314_213211.jpg?v=1710489658&width=500',
    },
  ];

  return (
    <div>
      <div class="shop-by-sprays">AMBIENT SPRAYS</div>
      <p className='spray-item p'>NEW LAUNCH</p>
    <div className="spray-banner-container">
    
      {collections.map((collection, index) => (
        <div key={index} className="spray-item">
          <img src={collection.imageUrl} alt={collection.title} />
          <h2>{collection.title}</h2>
          <h2>{collection.price}</h2>
          <button>VIEW PRODUCTS</button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default AmbientSprays;
