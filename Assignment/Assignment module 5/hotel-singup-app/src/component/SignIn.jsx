import React, { useState } from 'react';
import { MDBContainer, MDBInput, MDBBtn, MDBIcon} from 'mdb-react-ui-kit'; 
import '../assets/style.css';
import Swal from 'sweetalert2'

const SignIn = () => {
  //variables to hold form data
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
     setEmailError('');
     setPasswordError('');
   
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError('Please enter a valid email address');
        return;
      }
      
      // Password validation
      if (password.length < 8) {
        setPasswordError('Password must be at least 8 characters long');
        return;
      }
    console.log('Form submitted!');
 setFormSubmitted(true);
};


const resetForm = () => {
  
  setEmail('');
  
  setPassword('');
  setFormSubmitted(false);
};

//success message if form is submitted successfully
if (formSubmitted) {
  Swal.fire({
    icon: 'success',
    title: 'Success!',
    text: 'You Sign in successfully!',
  }).then(resetForm);

  };

  return (
    <MDBContainer>
      <form className='p-6 mt-5' onSubmit={handleSubmit}>
      
        <p className="h4 text-center mb-4 ">Sign In</p>
        
      
        <MDBInput
          //label="Email"
          value={email}
          label={<><i className="bi bi-envelope" style={{color:'mediumskyblue'}}></i> Email</>}
          onChange={(e) => setEmail(e.target.value)}
        />
         {emailError && <div className="text-danger">{emailError}</div>}

    
        <MDBInput
          label={<><i className="bi bi-lock-fill" style={{color:'steelblue'}}></i> Password</>}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <div className="text-danger">{passwordError}</div>}
      

        <MDBBtn style={{textDecorationColor:'red'}}> Forgot password ?</MDBBtn>
        <div className="text-center mt-4">
          <MDBBtn type="submit" color='success' id='btn'>Sign In</MDBBtn>
        </div>

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

        <div className="text-center mt-4">
          <p>Don't have an account? <a href="#">Sign Up</a></p>
        </div>
      </form>
    </MDBContainer>
  );
};

export default SignIn;