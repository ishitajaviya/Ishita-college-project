import React from 'react';
import './style.css';
import Header from './Header';
import Footer from './Footer';

function ShippingPolicy() {
  return (
        <div>

      <Header/>

    <div className="container">
      <div className="shipping-policy">
        <h2>SHIPPING POLICY</h2>
        <p>Although packing is done under strict supervision, we are not responsible for any breakage, loss, or theft while in transit. Our Liability ceases after handling the parcel to the courier.</p>
        <p>All deliveries are scheduled through reputed couriers. You will be informed when the seller ships your consignment and will also be provided a tracking number. We generally ship through Bluedart/ Delhivery/ DHL / Fedex Logistics wherever possible or will use other reputed courier service providers.</p>
        <p>There is sometimes a possibility of extra charges like Octroi etc. which are to be borne by the recipient at the time of delivery.</p>
        <p>The prices, Specifications and availability of items are subject to change without any prior notice.</p>
        <p>The usual lead time is 2-7 days(Domestic shipping) and 1-3 weeks (International shipping) from the date of receipt of the orders.</p>
        <p>Those items for shipment to countries outside India may be subject to taxes, customs duties and fees levied by the destination country ("Import Fees"). The recipient of the shipment is the importer of record in the destination country and is responsible for all Import Fees.</p>
        <p>Under no circumstances whatsoever shall Isak be liable for any loss or damages whatsoever including, without limiting, any indirect, special, incidental, consequential, or other damages that result from the use of or inability to use the products/services offered on the site.</p>
      </div>

      <div className="order-cancellation">
        <h2>How do I cancel an order on ISAK Fragrances website?</h2>
        <p>If unfortunately, you have to cancel an order, please do so at the earliest by emailing us at <a href="mailto:contactus@isakfragrances.com">contactus@isakfragrances.com</a></p>
        <p><strong>For outright cancellations by you:</strong></p>
        <ul>
          <li>If you cancel your order before your order has been shipped, we will arrange to refund the full amount back to the original mode of payment.</li>
          <li>If the cancellation is after your product has been shipped, there will be no refund.</li>
        </ul>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default ShippingPolicy;
