import React from 'react';
import './style.css';
import Header from './Header';
import { FaYoutube, FaBirthdayCake, FaComment, FaInstagram, FaDollarSign, FaUserPlus } from 'react-icons/fa'; // Import icons from react-icons library




function Reward() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <div className="image-container">
          <img src="https://cdn.shopify.com/s/files/1/1036/0119/files/isak_fragrances.png?v=1684925018" alt="logo" />
          <div className="overlay-content">
            <h1>Join and Earn Rewards</h1>
            <p>Win Coins for every spend to redeem exclusive Rewards and Discounts</p>
            <button className="signup-button">Sign Up and Get Free Coins</button>

            <button className="signin-button">Sign In</button>
          </div>
        </div>
        
      </header>
      <section className="how-it-works">
        <h2>How it Works?</h2>
        <p>Win Coins for every spend to redeem exclusive Rewards and Discounts.</p>
        
        
        <div className="circle-steps-container">
      <div className="circle-step">
        <div className="circle">1</div>
        <p>Sign Up</p>
        <p>Create an account on our store</p>
      </div>
      <div className="circle-step">
        <div className="circle">2</div>
        <p>Earn Coins</p>
        <p>Earn coins for shopping</p>
      </div>
      <div className="circle-step">
        <div className="circle">3</div>
        <p>Redeem</p>
        <p>Redeem coins for discounts</p>
      </div>
    </div>
    
      </section>

      
    </div>
  );
}

export default Reward;
