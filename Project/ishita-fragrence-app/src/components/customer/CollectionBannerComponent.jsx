
import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';

const CollectionBannerComponent = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/addproduct`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);


  return (
    <div>
    <div class="shop-by-sprays">Collections</div>

    <div className="spray-banner-container">
 
        
        {products.map(product => (
          <div key={product.id} className="spray-item">
          
            
            <div>Name: {product.productname}</div>
            <div> <img src={product.photo} style={{width:"100px" , height:"100px"}}/></div>
            <div> {product.description}</div>
            Old Price: <div style={{textDecoration:"line-through"}}>{product.oldprice}</div>
            <div>New Price: {product.newprice}</div>
            <div>quantity: {product.quantity}</div>
            <div><button>VIEW PRODUCTS <Link to={'/'}></Link></button></div>
            {/* Render other product details */}
          </div>
        ))}
      
        </div>
          
          </div>
  );
};

export default CollectionBannerComponent;
