// FeaturedContentComponent.js

import React from 'react';
import './style.css';

const FeatureArticleComponent = () => {
  return (
    <div>
    <div class="shop-by-article">FEATURE   ARTICLE</div>
    <div className="featured-article-container">
      <div className="featured-section">
        <h2>FEATURED ARTICLE</h2>
        <p>Valentine's Day Gift</p>
        <p>CRAFTING LOVE’S SIGNATURE SCENT: A UNIQUE VALENTINE’S DAY EXPERIENCE</p>
        <img src="https://isakfragrances.com/cdn/shop/articles/Blog_Banner_Images.png?v=1706697986&width=1000" alt="Valentine's Day Gift" />
        <p>
          Valentine's Day is around the corner, and the quest for the perfect gift is on. While traditional presents have their charm, there's something incomparably special about gifting an experience. This...
        </p>
        <a href="#">Read more</a>
      </div>
      <div className="featured-section">
        <h2>Isak Home Fragrances</h2>
        <p>HOW TO USE REED DIFFUSERS: 2023 GUIDE</p>
        <img src="https://isakfragrances.com/cdn/shop/articles/7.png?v=1706699605&width=1000" alt="Reed Diffusers Guide" />
        <p>
          Reed diffusers are an excellent way to keep your house and workplace smelling good all the time. The simplest way to fragrance a place is with reed diffusers. It is the ideal scent for your bathroom...
        </p>
        <a href="#">Read more</a>
        <button className="color-change-button">VIEW ALL ARTICLES</button>
      </div>
      <div className="featured-section">
        <h2>Is fragrance addiction a thing?</h2>
        <p>IS FRAGRANCE ADDICTION A THING?</p>
        <img src="https://isakfragrances.com/cdn/shop/articles/8.png?v=1706699631&width=1000" alt="Fragrance Addiction" />
        <p>
          The Oxford dictionary defines "addiction" as the condition of being unable to stop using or doing something as a habit, especially something harmful. In this day and age, one thing we are all addic...
        </p>
        <a href="#">Read more</a>
        </div>
    </div>
    </div>
  );
};

export default FeatureArticleComponent;
