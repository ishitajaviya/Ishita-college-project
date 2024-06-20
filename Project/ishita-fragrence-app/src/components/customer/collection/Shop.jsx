import React from 'react';
import '../../customer/style.css';


const Shop = () => {
  return (
  <div className='shop-container'>
      <div className="navigation">
        <h3>Popular</h3>
        <ul>
          <li><a href="/new-arrivals">new arrivals</a></li>
          <li><a href="/bestsellers">Bestsellers</a></li>
          <li><a href="/for-her">For Her</a></li>
          <li><a href="/for-him">For Him</a></li>
        </ul>
      </div>

      <div className="category-menu">
        <h3>categoris</h3>
        <ul>
          <li><a href="/collection/perfumes">perfumes</a></li>
          <li><a href="/collection/attars">attars</a></li>
          <li><a href="/home-fragrance">Home Fragrance</a></li>
          <li><a href="/makeyourown">Make Your Own Perfume</a></li>
        </ul>
      </div>


      <div className="category-menu">
        <h4>COLLECTIONS</h4>
        <ul>
          <li><a href ="/first-rain-collection">First Rain Collection</a></li>
          <li><a href ="/signature-collection">Signature Collection</a></li>
          < li><a href ="/legacy-collection">Legacy Collection</a></li>
          <li><a href ="/royal-avadh-collection">Royal Awadh Collection</a></li>
        </ul>
      </div>

      <div className="category-menu">
        <h4>pack type</h4>
        <ul>
        <li><a href ="/discovery-packs">Discovery Packs</a></li>
          <li><a href="/minis-travel-packs">Minis - Travel Packs</a></li>
          <li><a href ="/multi-packs">Multi-Packs</a></li>
          <li>< a href ="/all-products">All Products</a></li>
        </ul>
      </div>
      
      <div className="category-menu">
        <h5>SCENT FAMILY</h5>
        <ul>
          <li> <a href ="/woody">Woody</a></li>
          <li><a href ="/floral">Floral</a></li>
          <li><a href ="/citrus">Citrus</a></li>
          <li><a href="/aquatic">Aquatic</a></li>
        </ul>
        </div>
        
    </div>
  );
};

export default Shop;
