import React, { useState } from 'react';
import { MDBContainer, MDBInput, MDBBtn, MDBIcon} from 'mdb-react-ui-kit'; 
import '../assets/css/style.css';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  // State variables to hold form data
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobileNumberError, setMobileNumberError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

     setFullNameError('');
     setEmailError('');
     setMobileNumberError('');
     setPasswordError('');
 
    // logic here for form submission


      // Full Name validation
      if (!fullName.trim()) {
        setFullNameError('Please enter your full name');
        return;
      }
  
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError('Please enter a valid email address');
        return;
      }
  
      // Mobile Number validation
      const mobileRegex = /^[0-9]{10}$/;
      if (!mobileRegex.test(mobileNumber)) {
        setMobileNumberError('Please enter a valid 10-digit mobile number');
        return;
      }
  
      // Password validation
      if (password.length < 8) {
        setPasswordError('Password must be at least 8 characters long');
        return;
      }
    console.log('Form submitted!');
 // If all validations pass, set formSubmitted to true
 setFormSubmitted(true);
};

// Function to reset form state after successful submission
const resetForm = () => {
  setFullName('');
  setEmail('');
  setMobileNumber('');
  setPassword('');
  setFormSubmitted(false);
};

// Show success message if form is submitted successfully
if (formSubmitted) {
  Swal.fire({
    icon: 'success',
    title: 'Success!',
    text: 'Your account has been created successfully!',
  }).then(resetForm);

  };

  return (
    <MDBContainer>
      <form className='p-6 mt-5' onSubmit={handleSubmit}>
      
        <p className="h4 text-center mb-4 ">Sign Up</p>
        {/* Input fields for full name, email, mobile number, and password */}
        
        <MDBInput
          //label="Full Name"
          value={fullName}
           label={<><i className="bi bi-person" style={{color:'mediumskyblue'}}></i> Full Name</>}
          onChange={(e) => setFullName(e.target.value)}
        />
        
          

        {fullNameError && <div className="text-danger">{fullNameError}</div>}
    
        <MDBInput
          //label="Email"
          value={email}
          label={<><i className="bi bi-envelope" style={{color:'mediumskyblue'}}></i> Email</>}
          onChange={(e) => setEmail(e.target.value)}
        />
         {emailError && <div className="text-danger">{emailError}</div>}

        <MDBInput
           label={<><i className="bi bi-telephone" style={{color:'steelblue'}}></i> Mobile Number</>}
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />

        {mobileNumberError && <div className="text-danger">{mobileNumberError}</div>}

        <MDBInput
          label={<><i className="bi bi-lock-fill" style={{color:'steelblue'}}></i> Password</>}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <div className="text-danger">{passwordError}</div>}
        {/* Button to create account */}
        <div className="text-center mt-4">
          <MDBBtn type="submit" color='success' id='btn'>Create Account</MDBBtn>
        </div>
        {/* Optional: Links to sign in with Facebook or Google */}

        <div className="text-center mt-4">
          <p>or sign in using</p>
          <div style={{ display: 'flex', gap: '18px' }}>
      <MDBBtn className='facebook' social="fb">
        Facebook
      </MDBBtn>
      <MDBBtn color="danger" social="gplus">
        Google
      </MDBBtn>
    </div>
        </div>
        {/* Optional: Link to sign in if already have an account */}
        <div className="text-center mt-4">
          <p>Already have an account? <Link to='/'>Sign In</Link></p>
        </div>
      </form>
    </MDBContainer>
  );
};

export default SignUpForm;