import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand,Container } from "react-bootstrap";


function Header(){
    return(
        <div>

      <Container fluid className='p-3 bg-primary header-app shadow'>
        <p className='text-white text-center'>Use code ISHITAFIRST to get 15% OFF on 50ml perfumes</p>
      </Container>
      {/* ishika navbar */}
      <Navbar className='nav navbar navbar-expand bg-white text-dark shadow'>
      <NavbarBrand className='navbar-brand fs-2 ms-2'><Link to='/'>Ishita Fragerence</Link></NavbarBrand>  
      <ul className='nav-link'>
      <li><Link to="/shop">Shop</Link></li>
      <li><Link to="/gifting">Gifting</Link></li> 
      <li><Link to="/about">About</Link></li> 
      <li><Link to="/rewards">Rewards</Link></li> 
      <li><Link to="/makeyourown">Make Your own Perfumes</Link></li>
      <li className='float-end ms-2'><Link to="/customer-login"><span className='bi bi-person'></span></Link></li> 
      <li><Link to="/search"><span className='bi bi-search'></span></Link></li> 
      <li><Link to="/cart"><span className='bi bi-cart'><span ></span></span></Link></li> 
      <li><Link to="/wishlist"><span className='bi bi-heart'><span className="badge badge-sm bg-danger"></span></span></Link></li> 
      </ul>
      </Navbar>




        </div>
        );
};

export default Header;
