import React from 'react';
import { Container,Row,Navbar,NavbarBrand } from 'react-bootstrap';
import Sliders from './components/customer/Sliders';
import { Link,Outlet } from 'react-router-dom';
import Footer  from './components/customer/Footer';
import CategoryBanner from './components/customer/CategoryBanner';
import '../src/style.css';
import CollectionBannerComponent from './components/customer/CollectionBannerComponent'
import OrderInfoComponent from './components/customer/OrderInfoComponent';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import FeatureArticleComponent from './components/customer/FeatureArticleComponent';
import ImageGallery from './components/customer/ImageGallery';
import { useState } from 'react';
import './style.css'
import Cart from './components/customer/Cart';
import AmbientSprays from './components/customer/AmbientSprays';
import Header from './components/customer/Header';


//import FirstRainImageHover from './components/customer/FirstRainImageHover';//

//import Shop from './components/customer/Shop';//


library.add(faCoffee)



export default function Layout() {

  const [isOpen, setIsOpen] = useState({});

  const toggleAccordion = (index) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const faqData = [
    { question: 'Do you ship overseas?', answer: 'Yes, we ship all over the world. Shipping costs will apply, and will be added at checkout. We run discounts and promotions all year, so stay tuned for exclusive deals.' },
    { question: 'How long will it take to get my orders?' , answer: 'It depends on your pincode/ delivery location. Orders to be delivered in India will take 2- 5 business days to arrive. Overseas deliveries can take anywhere from 7-16 days. Delivery details will be provided in your confirmation email.'},
    { question: 'Can I get my order gift wrapped?' , answer: 'Yes, You can get your order gift wrapped! Simply click on the gift wrap option on the product page and select what you want to add. You can also get a handwritten note added.'},
  ];
  
  return (
    <div>
        {/* ishika headers */}
        <Header/>

      
      
      {/* sliders here */}

      

      <Sliders/>


      <CategoryBanner/>


    <AmbientSprays/>
  

      <CollectionBannerComponent/>
      

     
      <div className="timeline__item">
        
      <div className="timeline__item-image-wrapper">
        <picture>
          <img 
            src="//isakfragrances.com/cdn/shop/files/1_a7ca3727-a95f-4f50-be9b-260237cc4c52.png?v=1650365014&amp;width=580" 
            alt="" 
            srcSet="//isakfragrances.com/cdn/shop/files/1_a7ca3727-a95f-4f50-be9b-260237cc4c52.png?v=1650365014&amp;width=600 600w, //isakfragrances.com/cdn/shop/files/1_a7ca3727-a95f-4f50-be9b-260237cc4c52.png?v=1650365014&amp;width=700 700w, //isakfragrances.com/cdn/shop/files/1_a7ca3727-a95f-4f50-be9b-260237cc4c52.png?v=1650365014&amp;width=800 800w, //isakfragrances.com/cdn/shop/files/1_a7ca3727-a95f-4f50-be9b-260237cc4c52.png?v=1650365014&amp;width=1000 1000w" 
            width="580" 
            height="580" 
            loading="eager" 
            sizes="min(50vw, 575px)" 
            className="image-cover" 
            style={{objectPosition: '39.293% 75.6309%'}}
          />
        </picture>
      </div>
      <div className="timeline__item-content">
        <div className="prose">
          <p className="h6">About us</p>
          <p className="h2">Our Story</p>
          <p>
            The unrivalled fragrance formulations along with the lingua franca graced with the ever so famous tehzeeb and nazaaqat of the city of Lucknow, spreading and winning discerning patronage across regions.
            </p>
            <p>
               Over the last century, our fragrance house has managed to build and blossom the business driven by the artistry and perfection of hand blending and not commercial priorities.
            </p>
              <p> 
                 with a keen inherited nose, counting 170 years and 6 generations to be precise. What our recipe is, is hard to divulge,
                 </p>
                 <p>
               but we acknowledge, it is a dream commission.
          </p>
        </div>
      </div>
    </div>
    <carousel-navigation align-selected="" aria-controls="carousel-template--14567039795294__timeline" className="timeline__nav hide-scrollbar bleed sm:unbleed" style={{ display: 'flex', justifyContent: 'center' }}>
      <button className="heading" aria-current="true" fdprocessedid="i02vio" style={{ color: 'black' }}>OUR STORY</button>
      <button className="heading" aria-current="false" fdprocessedid="tjz8b" style={{ color: 'black' }}>CRAFTSMANSHIP</button>
      <button className="heading" aria-current="false" fdprocessedid="gft1ok" style={{ color: 'black' }}>MEANING</button>
    </carousel-navigation>

      

        <FeatureArticleComponent/>

      
        
          <ImageGallery/>


        
      

    <div className="faq-title-container">
      <h1 className="faq-title">NEED HELP?</h1>
      <p className="faq-subtitle">FREQUENTLY ASKED QUESTIONS</p>
      <p className='order-Faq'>ORDER</p>

    <div className="faq-container"> 
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div
            className={`faq-question ${isOpen[index] ? 'open' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            {item.question}
            <span className="toggle-icon">{isOpen[index] ? '-' : '+'}</span>
          </div>
          {isOpen[index] && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}

    </div>
    </div>


      <OrderInfoComponent/>



      <Footer/>
      <Outlet />
    </div>
  )
}
