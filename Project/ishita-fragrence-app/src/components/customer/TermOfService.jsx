import React from 'react';
import './style.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { Container,Navbar,NavbarBrand } from 'react-bootstrap';


function TermOfService() {
  return (
    <div>
        <Container fluid className='p-3 bg-primary header-app shadow'>
        <p className='text-white text-center'>Use code SHARKTANK to get 15% OFF on 50ml perfumes</p>
      </Container>
     <Navbar className='nav navbar navbar-expand bg-white text-dark shadow'>
      <NavbarBrand className='navbar-brand fs-2 ms-2'>Ishita Fragerence</NavbarBrand>  
      <ul className='nav-link'>
      <li><Link to="/shop">Shop</Link></li>
      <li><Link to="/gifiting">Gifting</Link></li> 
      <li><Link to="/about">About</Link></li> 
      <li><Link to="/rewards">Rewards</Link></li> 
      <li><Link to="/makeyourown">Makeyourown Perfumes</Link></li>
      <li className='float-end ms-5'><Link to="/customer-login"><span className='bi bi-person'></span></Link></li> 
      <li><Link to="/shop"><span className='bi bi-search'></span></Link></li> 
      <li><Link to="/shop"><span className='bi bi-cart'><span className="badge badge-sm bg-danger">0</span></span></Link></li> 
      </ul>
      </Navbar>



    <div className="container">
      <div className="terms-of-service">
        <h2>TERMS OF SERVICE</h2>
        <hr />

        <h3>OVERVIEW</h3>
        <p>This website is operated by Isak. Throughout the site, the terms “we”, “us” and “our” refer to Isak...</p>
        {/* Continue with the rest of the content */}

        <h3>SECTION 1 - ONLINE STORE TERMS</h3>
        <p>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence,
             or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
            You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
            You must not transmit any worms or viruses or any code of a destructive nature.
            A breach or violation of any of the Terms will result in an immediate termination of your Services.</p>
        {/* Continue with the rest of the content */}

        <h3>SECTION 2 - GENERAL CONDITIONS</h3>
        <p>We reserve the right to refuse service to anyone for any reason at any time...</p>
        {/* Continue with the rest of the content */}

        <h3>SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION</h3>
        <p>We are not responsible if information made available on this site is not accurate...</p>
        {/* Continue with the rest of the content */}

        {/* Repeat this pattern for the remaining sections */}
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default TermOfService;
