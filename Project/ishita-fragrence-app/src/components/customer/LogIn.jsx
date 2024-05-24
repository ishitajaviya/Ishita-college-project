import React, { useRef, useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import Footer from './Footer';
import Header from './Header';

import axios from 'axios';


const LogIn = ({  }) => {
 /* const [email, setEmail] = useState('');*/
  /*const [password, setPassword] = useState('');*/
 // const [errors, setErrors] = useState({});
  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  const SERVICE_ID="service_j2l8s1n";
  const TEMPLATE_ID="template_kq4xx7f";
  const PUBLIC_KEY ="bQ2Qvn-ttqP0WtkOx";
    const email=useRef("");
  const password=useRef("");
  const address=useRef("");
  const city=useRef("");
  const pincode=useRef("");
  const Navigate=useNavigate("");
  
  const AddLogIn=(e)=>{
 var insert={

  email:email.current.value,
  password:password.current.value,
  address:address.current.value,
  city:city.current.value,
  pincode:pincode.current.value
 }

 /*http://localhost:8000/login*/
 e.preventDefault();
 //call axios post
 emailjs.sendForm(SERVICE_ID,TEMPLATE_ID,e.target,PUBLIC_KEY);
 axios.post("http://localhost:8000/login",insert)
 
 
 // .then((result)=>{console.log(result.text);
.then(()=>{
  Swal.fire({
    title: "Good job!",
    text: "Thanks for login",
    icon: "success"
  })
  Navigate("/");
  });
  
  e.target.reset();
  }

  return (
    <div>
      <Header/>
    <div className="auth-container">
    <form onSubmit={AddLogIn}>
<h2 className='w-100 m-4 ms-5 mt-0 mb-4 text-success md-5'>Create Account</h2>

<div className="form-group col-md-11">
<label htmlFor="inputEmail4" className='text-success'>Email</label>
<input type="email" name='email' ref={email} className="form-control mb-4" id="inputEmail4" placeholder="Email"/>
</div>
<div className="form-group col-md-11">
<label htmlFor="inputPassword4" className='text-success'>Password</label>
<input type="password" name='password' ref={password} className="form-control" id="inputPassword4" placeholder="Password"/>
</div>
<label htmlFor="inputAddress" className='text-success'>Address</label>
<input type="text" name="address" ref={address} className="form-control mb-4" id="inputAddress" placeholder="1234 Main St"/>
<div className="form-group col-md-6">
<label htmlFor="inputCity" className='text-success'>City</label>
<input type="text" name="city" ref={city} className="form-control" id="inputCity"/>
</div>
<div className="form-group col-md-5">
<label htmlFor="inputZip" className='text-success'>Zip</label>
<input type="text" name="pincode" ref={pincode} className="form-control" id="inputZip"/>
</div>
<div className="form-group">
<div className="form-check">
<input className="form-check-input" type="checkbox" id="gridCheck"/>
<label className="form-check-label mb-2 text-success" htmlFor="gridCheck" >
Check me out
</label>
</div>
</div>
<button  type="submit" className="btn btn-primary">Create Account</button>

</form>
      
  </div>
  
  </div>
  );
};

export default LogIn;
