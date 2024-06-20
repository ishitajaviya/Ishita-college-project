import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import PageNotFound from './components/customer/PageNotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
//ishita fragrence admin panel modules 
import AdminLogin from './components/admin/AdminLogin';
import AdminLayout from './components/admin/AdminLayout';
import ManageCustomer from './components/admin/ManageCustomer';
import AddPortfolio from './components/admin/AddProduct';
import AddAbstract from './components/admin/AddAbstract';
import AddSkills from './components/admin/AddCategory';
import AddClient from './components/admin/AddClient';
import ManageContacts from './components/admin/ManageContacts';
import Shop from './components/customer/collection/Shop';
import Faq from './components/customer/Faq';
import OurStory from './components/customer/OurStory';
import Perfume from './components/customer/collection/Perfume';


import reportWebVitals from './reportWebVitals';
import ContactUs from './components/customer/ContactUs';
import ShippingPolicy from './components/customer/ShippingPolicy';
import TermOfService from './components/customer/TermOfService';
import RefundPolicy from './components/customer/RefundPolicy';
import Reward from './components/customer/Reward';
import About from './components/customer/About';
import Offers from './components/customer/Offers';
import LogIn from './components/customer/LogIn';
import Register from './components/customer/Register';
import Gifting from './components/customer/Gifting';
import Cart from './components/customer/Cart';
import MakeYourOwnPerfume from './components/customer/MakeYourOwnPerfume';
import Attars from './components/customer/collection/Attars';
import AboveBeyond from './components/customer/collection/AboveBeyond';
import AddCategory from './components/admin/AddCategory';
import AddProduct from './components/admin/AddProduct';
import Search from './components/customer/Search';
import DeleteCustomer from './components/admin/DeleteCustomer';
import DeleteCategory from './components/admin/DeleteCategory';
import ManageCategory from './components/admin/ManageCategory';
import UpdateCategory from './components/admin/UpdateCategory';
import UpdateProduct from './components/admin/UpdateProduct';
import DeleteProduct from './components/admin/DeleteProduct';
import ManageProduct from './components/admin/ManageProduct';
import DeleteContacts from './components/admin/DeleteContacts';
import CategoryBannerDetails from './components/customer/CategoryBannerDetails';
import AddSubCategory from './components/admin/AddSubCategory';


const root = ReactDOM.createRoot(document.getElementById('root'));
const handleLogIn = (userData) => {
  // Handle login logic here
  console.log('welcome User logged in:', userData);
};
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout />} />
    <Route path='/makeyourown' element={<MakeYourOwnPerfume />} />
    <Route path='/shop' element={<Shop/>} />
    <Route path='/search' element={<Search/>} />
    <Route path='/products/Above&Beyond' element={<AboveBeyond/>} />
    
    <Route path='/collection/perfumes' element = {<Perfume/>}/>
    <Route path='/collection/attars' element = {<Attars/>}/>
    <Route path='faq' element ={<Faq/>}/>
    <Route path='rewards' element ={<Reward/>}/>
    <Route path='/our-story'  element ={<OurStory/>}/>
    <Route path='/contactus'  element ={<ContactUs/>}/>
    <Route path='/term-of-service'  element ={<TermOfService/>}/>
    <Route path='/shipping-policy'  element ={<ShippingPolicy/>}/>
    <Route path='/refund-policy'  element ={<RefundPolicy/>}/>
    <Route path='/about' element ={<About/>}/>
    <Route path='/offers' element ={<Offers/>}/>
    <Route path='/register' element ={<Register/>}/>
    <Route path='/customer-login' element ={<LogIn onLogin={handleLogIn}/>}/>
    <Route path='/gifting' element ={<Gifting/>}/>
    <Route path='/cart' element ={<Cart/>}/>
    
    <Route path='/category-banner-details/:id' element ={<CategoryBannerDetails/>}/>
    

    
    {/* <Route path='/shop' element={<Layout />} />
    <Route path='/about' element={<Layout />} />
    <Route path='/gifting' element={< />} />
    <Route path='/rewards' element={<Layout />} />
    <Route path='/makeyourown' element={<Layout />} />
    <Route path='/contactus' element={<Layout />} />
    <Route path='/feedbackus' element={<Layout />} />
    <Route path='/account' element={<Layout />} />
    <Route path='/cart' element={<Layout />} />
    <Route path='/privacy' element={<Layout />} />
    <Route path='/shippingpolicy' element={<Layout />} />
    <Route path='/terms' element={<Layout />} />
    <Route path='/careers' element={<Layout />} />
    <Route path='/offers' element={<Layout />} />
    <Route path='/ourstory' element={<Layout />} />
    <Route path='/faq' element={<Layout />} /> */}
  

     {/*<Admin panel Routing />*/}
   <Route path='/admin-login' element={<AdminLogin />} />
   <Route path='/admin-login/admin-dashboard' element={<AdminLayout />} />
   <Route path='/admin-login/manage-customer' element={<ManageCustomer />} />
   <Route path='/admin-login/add-product' element={<AddProduct/>} />
   <Route path='/admin-login/add-abstract' element={<AddAbstract />} />
   <Route path='/admin-login/add-category' element={<AddCategory />} />
   
   <Route path='/admin-login/add-subcategory' element={<AddSubCategory />} />
   <Route path='/admin-login/add-clients' element={<AddClient />} />
   <Route path='/admin-login/manage-contacts' element={<ManageContacts />} />
   <Route path='/admin-login/delete-contacts/:id' element={<DeleteContacts />} />
   <Route path='/admin-login/delete-customers/:id' element={<DeleteCustomer />} />
   <Route path='/admin-login/manage-category' element={<ManageCategory/>} />
    <Route path='/admin-login/deletecategory/:id' element={<DeleteCategory/>} />
    <Route path='/admin-login/update-category/:id' element={<UpdateCategory/>} />

     
    <Route path='/admin-login/manage-product' element={<ManageProduct/>} />
    <Route path='/admin-login/delete-product/:id' element={<DeleteProduct/>} />
    <Route path='/admin-login/update-product/:id' element={<UpdateProduct/>} />

  

    <Route path='*' element={<PageNotFound />} />

    </Routes>  
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
