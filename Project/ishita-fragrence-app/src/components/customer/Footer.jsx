// Footer.js (React Component)
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faPinterest, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
      <div>
        
    <footer className="footer-container">
      <div className="about-section">
        <h3>About Ishita</h3>
        <p>
          We are a fragrance house dedicated to the creation of unrivaled niche Indian artisanal fragrances of rare notes and blends, backed with the family experience of over a century and a half.
        </p>
        <p>
          Less Fake, More Real. Less Frill, More Essence. Less Everybody, More You.
        </p>
      </div>

      <div className="information-section">
        <h3>Information</h3>
        <ul cl>
          <li><a href="/shipping-policy">Shipping Policy</a></li>
          <li><a href="/refund-policy">Refund & Exchange Policy</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/term-of-service">Terms of Service</a></li>
          <li><a href="/contactus">Contact Us</a></li>
          
        </ul>
      </div>

      <div className="about-us-section">
        <h3>About Us</h3>
        <ul>
          <li><a href="/our-story" >Our Story</a></li>
          <li><a href="/stockist">Our Stockist</a></li>
          <li><a href="/rewards">Isak Rewards</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/offers">Offers</a></li>
        </ul>
      </div>

      <div className="newsletter-section">
        <h3>Newsletter</h3>
        <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
        <form>
          <input type="email" placeholder="E-mail" />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </div>

      <div className="social-icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://in.pinterest.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faPinterest} />
        </a>


      </div>


    </footer>

    </div>
  );
}


