import React from 'react';
import './style.css';
import Footer from './Footer';
import Header from './Header';

const RefundPolicy = () => {
  return (
    <div>
        
    <Header/>

    <div className="refund-policy-container">
      <h1>Refund Policy</h1>
      <p>
        In accordance with global retail industry standards, and for the safety of our consumers, we are unable to accept returns or exchanges of products that appear to be opened, tried, or used.
      </p>
      <h2>Exchanges (if applicable)</h2>
      <p>
        We only replace items if they are defective or damaged. You need to exchange it for the same item, send us an email at <a href="mailto:contactus@isakfragrances.com">contactus@isakfragrances.com</a> within 3 days of receiving the product. Exchange is possible only after verification from our end.
      </p>
      <h2>Shipping</h2>
      <p>
        To return your defective product, you should mail your product to: A1/J, Lucknow-24 Uttar Pradesh IN.
      </p>
      <p>
        You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable.
      </p>
      </div>
      <Footer/>
    </div>
  );
};

export default RefundPolicy;
