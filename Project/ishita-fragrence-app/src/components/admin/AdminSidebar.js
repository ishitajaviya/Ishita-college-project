import React from 'react';
import { Container,Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function AdminSidebar() {
  return (
    <div>
      <ul className='sidebar-link'>
      <li className='mt-10 p-2'><Link to=""><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz44gDg2wPB5oTwkIUPKpAhUWdOQ8yysCZeg&s' className='img-fluid ractangle-rounded w-75' alt='fragrance image' /></Link></li>
      <li><Link to='/admin-login/admin-dashboard'> Ishita  Dashboard</Link></li>
      <li><hr className="border border-1 border-white" /></li>
      <li><Link to='/admin-login/manage-customer'>Manage Customers</Link></li>
      <li><hr className="border border-1 border-white" /></li>
      <li><Link to='/admin-login/add-category'>Add Category</Link></li>
      <li><hr className="border border-1 border-white" /></li>
      <li><Link to='/admin-login/add-product'>Add Products</Link></li>
      <li><hr className="border border-1 border-white" /></li>
      <li><Link to='/admin-login/add-clients'>Manage Feedbacks</Link></li>
      <li><hr className="border border-1 border-white" /></li>
      <li><Link to='/admin-login/manage-contacts'> Manage Contacts</Link></li>
      <li><hr className="border border-1 border-white" /></li>
      <li><Link to='/admin-login/manage-reviews'> Manage reviews</Link></li>
      <li><hr className="border border-1 border-white" /></li>
      <li><Link to='/admin-login/manage-orders'> Manage Orders</Link></li>
      <li className='mt-5'><Link to='#' className='btn btn-block bg-danger w-75'> Logout ?</Link></li>

  
      </ul>
</div>
  )
}
