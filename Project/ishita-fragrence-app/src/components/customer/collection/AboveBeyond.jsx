import React from 'react';
import './style.css';
import Header from '../Header';
import Footer from '../Footer';

function AboveBeyond(){
return(
    <div>
      <Header/>
    <div className="above-beyond-perfume-img">
    <img src="https://isakfragrances.com/cdn/shop/files/3_541d6b22-9e15-45ef-af26-492dfa3f5536.png?v=1701070254&width=600"  alt="image1"/>
    <img src="https://isakfragrances.com/cdn/shop/files/1_a093dffb-6c6a-4742-a966-5eac3bd666bb.png?v=1701070254&width=600"  alt="image2"/>
    <img src="https://isakfragrances.com/cdn/shop/files/2_f398d43c-e469-4a02-9d5f-3438cbe2d225.png?v=1701070254&width=600"  alt="image3"/>
    <img src="https://isakfragrances.com/cdn/shop/files/2_f398d43c-e469-4a02-9d5f-3438cbe2d225.png?v=1701070254&width=600"  alt="image4"/>
    
    </div>
    
    <div className="above-beyond-perfume">
    
    <h1> <span className="gray"  >Above & Beyond Perfume</span></h1>
    
    <div className="rating-badge__stars" role="img" aria-label="4.4 out of 5.0 stars">
      <svg aria-hidden="true" focusable="false" width="12" className="icon icon-star-rating" viewBox="0 0 12 11">
        <path d="M6 0l1.852 3.61H12L8.77 6.89l.486 4.361L6 9.46 3.743 11l.487-4.361L0 4.61h4.148z" fill="#1c1c1c"></path>
      </svg>
      <svg aria-hidden="true" focusable="false" width="12" className="icon icon-star-rating" viewBox="0 0 12 11">
        <path d="M6 0l1.852 3.61H12L8.77 6.89l.486 4.361L6 9.46 3.743 11l.487-4.361L0 4.61h4.148z" fill="#1c1c1c"></path>
      </svg>
      <svg aria-hidden="true" focusable="false" width="12" className="icon icon-star-rating" viewBox="0 0 12 11">
        <path d="M6 0l1.852 3.61H12L8.77 6.89l.486 4.361L6 9.46 3.743 11l.487-4.361L0 4.61h4.148z" fill="#1c1c1c"></path>
      </svg>
      <svg aria-hidden="true" focusable="false" width="12" className="icon icon-star-rating" viewBox="0 0 12 11">
        <path d="M6 0l1.852 3.61H12L8.77 6.89l.486 4.361L6 9.46 3.743 11l.487-4.361L0 4.61h4.148z" fill="#1c1c1c"></path>
      </svg>
      <svg aria-hidden="true" focusable="false" width="12" className="icon icon-star-rating" viewBox="0 0 12 11">
        <path d="M6 0l1.852 3.61H12L8.77 6.89l.486 4.361L6 9.46 3.743 11l.487-4.361L0 4.61h4.148z" fill="#1c1c1c"></path>
      </svg>(4.5)
    </div>
    
<div> 
    <p>
        'Above & Beyond' is a lavish masculine perfume which is warm and embracing. With the power of Patchouli and Lavender, it draws the wearer into a sense of piquant enchantment. Adding a hint to your sensuality; Above & Beyond is royal with a definite modern edge.
    </p>
   "Base: Muguet, Amber, Sandalwood"
    <br/>
        "Top Note: Bergamot, Lavender"
    <br/>
        "Heart: Rosemary, Patchouli"
        <br/>
</div>  

<div className='data-option-selector'>
<p>Size:</p>
<label className='box-shadow'><sup>50 (ml)</sup></label>
<label className='box-shadow'><sup>9 (ml)</sup></label>
  <br/>
<p className='price-set'>RS.3200</p>
</div>
<div className='pros'>
<span>(MRP inclusive of all taxes)</span>
<p className='earn-coins'>
<span>Earn 3200 Coins With This Purchase.</span>
</p>
    </div>
    </div>
    <Footer/>
    </div>
    
);
}
  
export default AboveBeyond;
