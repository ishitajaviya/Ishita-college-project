// ContactForm.js
import React, { useState,useRef} from 'react';
import Swal from 'sweetalert2';
import './style.css';
import Header from './Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Container,Navbar,NavbarBrand } from 'react-bootstrap';

import Footer from './Footer';
import LogIn from './LogIn';

const ContactUs = () => {

  const email=useRef("");
  const name=useRef("");
  const message=useRef("");
  const Navigate=useNavigate("");
  
  const AddContactUs=(e)=>{
 var insert={
  name:name.current.value,
  email:email.current.value,
  message:message.current.value,

 }

 /*http://localhost:8000/login*/
 e.preventDefault();

 
 

 //call axios post

 axios.post("http://localhost:8000/contactus",insert)
 
.then(()=>{
  Swal.fire({
    title: "Message Sent",
    text: "Thanks for Contact With Us..",
    icon: "success"
  })
  Navigate("/");
  });
  
  e.target.reset();
  }




  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  

  return (
    <div>
    <div>

      <Header/>
    </div>

    <div className="contact-form-container">
      <h2 className='header'>Contact Us</h2>
      <form onSubmit={AddContactUs}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            ref={name}
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            ref={email}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            ref={message}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">SEND MESSAGE</button>
      </form>
    </div>
    </div>
  );
};

export default ContactUs;
