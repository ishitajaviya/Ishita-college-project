// OurStory.js

import React from 'react';
import './style.css';
import founderImage from '../../images/founder_image.jpg';
import Footer from './Footer';
import Header from './Header';

const OurStory = () => {
  return (
    <div>

     <Header/> 

    <div className="our-story-container">
      <section className="section">
        <h2>OUR STORY</h2>
        <h3>The Founder</h3>
        <div className="founder-details">
          <img src={founderImage} alt="Founder Vidushi Vijayvergiya" />
          <div className="founder-description">
            <p>
              The Founder & CEO of ISHITA Fragrances - Ishita Javiya as a perfumer & serial entrepreneur to understand the new world as well as extensive interest and research in aroma customization started from Switzerland, France, and India.
            </p>
            <p>
              "Having grown up around fragrances I have always been drawn to them and as I ventured towards exploring it more, I came to realize that Indian perfumery has its own unique charm. There are a lot of people who appreciate it but know little about the art. Thus, through ISHITA my intention is to talk more about our roots, heritage and the charm in Indian perfumery and introduce it to the rest of the world to be mesmerized with." - Ishita javiya.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h3>HOW IT ALL BEGAN</h3>
        <h4>IShita Fragrance History</h4>
        <p>
          It was in the era of the 1850s, when our story came to life. The then Begum, received an anonymous consignment of the most exquisite lucknowi chikankari ensembles, lingering with the rarest of aromas, enticing even the discerning 'royal nose' and making her fall in love with the scent.
        </p>
        {/* Add more content */}
      </section>

      <section className="section">
        <h3>WHO WE ARE TODAY</h3>
        <p>
          We are a fragrance house dedicated to the creation of unrivaled niche Indian artisanal fragrances of rare notes and blends, backed with the family experience of over a century and a half.
        </p>
        <p>
          Still based in Lucknow, we manufacture and extract many of our own essences using traditional infusion & distillation techniques that capture the complexity and notes of raw and rare ingredients of each blend – a process now foregone as too meticulous in times of machine-made.
        </p>
        {/* Add more content */}
      </section>

      <section className="section">
        <h2>ISAK</h2>
        <p>
          ISAK is a Hindi word derived from ‘ISHQ’. It is pronounced as /IS(e)K/ and is largely used in the heartland of Uttar Pradesh, also our home.
        </p>
        <p>
          As our biggest strength lies in our continuation to be artisanal, handcrafted and original over the years, and not get touched by the commerciality, in an industry that’s otherwise mass and stereo typical; ISAK represents who we are.
        </p>
        {/* Add more content */}
      </section>
    
    </div>
    <Footer/>
    </div>
  );
};

export default OurStory;
