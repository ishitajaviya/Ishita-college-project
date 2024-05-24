
import React, { useState } from 'react';
import { MDBContainer, MDBInput, MDBBtn} from 'mdb-react-ui-kit';
import '../assets/css/style.css'
import Swal from 'sweetalert2';


const ForgotPassword = () => {
    //variables to hold form data
    
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
  
    // Function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      
       setEmailError('');
       
     
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          setEmailError('Please enter a valid email address');
          return;
        }
        

      console.log('Form submitted!');
   setFormSubmitted(true);
  };
  
  
  const resetForm = () => {
    
    setEmail('');
    
    
    setFormSubmitted(false);
  };
  
  //success message if form is submitted successfully
  if (formSubmitted) {
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Check your mail for reset password!',
    }).then(resetForm);
  
    };
  
  return (
    
    <MDBContainer>
        
        <p className="h4 text-center mt-4 " style={{color:'white'}}>Forgot Password ?</p>
      <form className='p-6 mt-4' onSubmit={handleSubmit}>
      
        
        <MDBInput
          //label="Email"
          value={email}
          label={<><i className="bi bi-envelope" style={{color:'mediumskyblue'}}></i> Email</>}
          onChange={(e) => setEmail(e.target.value)}
        />
         {emailError && <div className="text-danger">{emailError}</div>}

        <div className="text-center mt-4">
          <MDBBtn type="submit" color='success' id='btn'>Submit</MDBBtn>
        </div>

      </form>
    </MDBContainer>
  );
};


export default ForgotPassword;