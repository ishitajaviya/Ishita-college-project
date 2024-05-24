import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import AdminFooter from './AdminFooter';

const AddClient = () => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState('');
  const [photoError, setPhotoError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [messageError, setMessageError] = useState('');

  const [successMessage, setSuccessMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError('');
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.value);
    setPhotoError('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
    setMobileError('');
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setMessageError('');
  };

  const handleValidation = () => {
    let isValid = true;

    // Validate Name
    if (!name) {
      setNameError('Please enter a name.');
      isValid = false;
    }

    // Validate Photo
    if (!photo) {
      setPhotoError('Please upload a photo.');
      isValid = false;
    }

    // Validate Email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    }

    // Validate Mobile
    if (!mobile || !/^\d{10}$/.test(mobile)) {
      setMobileError('Please enter a valid 10-digit mobile number.');
      isValid = false;
    }

    // Validate Message
    if (!message) {
      setMessageError('Please add a message.');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (handleValidation()) {
      // Perform your submit logic here
      setSuccessMessage('Reviews added successfully!');

      // Reset form fields
      setName('');
      setPhoto('');
      setEmail('');
      setMobile('');
      setMessage('');
    }
  };

  return (
    <div>
      <AdminHeader />
      <Container fluid className="m-0 p-0">
        <Row>
          <div className="col-md-3 bg-black">
            <AdminSidebar />
          </div>
          <div className="col-md-8">
            
            <h4 className="text-dark mt-5">&nbsp;Add Clients Reviews</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className={`form-control ${nameError ? 'is-invalid' : ''}`}
                  id="name"
                  placeholder="Name"
                  value={name}
                  onChange={handleNameChange}
                />
                {nameError && <div className="invalid-feedback">{nameError}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="photo" className="form-label">
                  Photo
                </label>
                <input
                  type="file"
                  className={`form-control ${photoError ? 'is-invalid' : ''}`}
                  id="photo"
                  onChange={handlePhotoChange}
                />
                {photoError && <div className="invalid-feedback">{photoError}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className={`form-control ${emailError ? 'is-invalid' : ''}`}
                  id="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={handleEmailChange}
                />
                {emailError && <div className="invalid-feedback">{emailError}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                  Mobile
                </label>
                <input
                  type="text"
                  className={`form-control ${mobileError ? 'is-invalid' : ''}`}
                  id="mobile"
                  placeholder="Phone *"
                  value={mobile}
                  onChange={handleMobileChange}
                />
                {mobileError && <div className="invalid-feedback">{mobileError}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Add Message
                </label>
                <textarea
                  className={`form-control ${messageError ? 'is-invalid' : ''}`}
                  id="message"
                  rows="3"
                  value={message}
                  onChange={handleMessageChange}
                ></textarea>
                {messageError && <div className="invalid-feedback">{messageError}</div>}
              </div>
              <div className="mb-3">
                <input
                  type="submit"
                  className="btn btn-lg btn-dark bg-dark text-white"
                  value="Add Reviews"
                />
                <input
                  type="reset"
                  className="btn btn-lg bg-danger text-white ms-4"
                  value="Reset"
                />
              </div>
            </form>
          </div>
        </Row>
      </Container>
      <AdminFooter />
    </div>
  );
};

export default AddClient;
