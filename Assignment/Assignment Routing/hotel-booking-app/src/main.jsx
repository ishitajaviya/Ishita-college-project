import React from 'react'
import ReactDOM from 'react-dom/client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css'
import SignUpForm from './component/SignUpForm'

import SignInForm from './component/SignInForm';

import { BrowserRouter as BrowserRouter, Routes,Route } from 'react-router-dom';
import ForgotPassword from './component/ForgotPassword';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      
    
    <Route path='/' element={<SignInForm />} />
    <Route path='/signupform' element={<SignUpForm />} />
    <Route path='/forgotpassword' element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
