import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import Swal from 'sweetalert2';



export default function AdminLogin() {
  const { handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Submitted data:', data);
    // Implement your login logic here
  };
  

  const responseGoogle = (response) => {
    console.log(response);
    // Handle the response, e.g., authenticate the user on your server
  };
  
  const responseFacebook = (response) => {
    console.log(response);
    // Handle the response, e.g., authenticate the user on your server
  };

  

  return (
    <div>
      <Container className='p-5 mt-5 col-md-5 mx-auto'>
        <h1 className='text-center'>Admin Login</h1>
        <h4 className='text-center'>Ishita Perfume Admin</h4>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-group mt-3'>
            <label>Email:</label>
            <Controller
              name="email"
              control={control}
              rules={{ required: 'Email is required' }}
              render={({ field }) => <input {...field} type='text' placeholder='Enter email *' className='form-control' />}
            />
            <p className='text-danger'>{errors.email?.message}</p>
          </div>

          <div className='form-group mt-3'>
            <label>Password:</label>
            <Controller
              name="password"
              control={control}
              rules={{ required: 'Password is required' }}
              render={({ field }) => <input {...field} type='password' placeholder='Enter password *' className='form-control' />}
            />
            <p className='text-danger'>{errors.password?.message}</p>
          </div>

          <div className='form-group mt-3'>
            <b>By clicking terms & conditions <input type='checkbox' name='chk' value="terms" /> and terms services</b>
          </div>

          <div className='form-group mt-3'>
            <input type='submit' name='login' value='Login' className='btn btn-primary text-white btn-block w-100' />
          
            <h2 className='text-center mt-3 hr-line'><span>OR</span></h2>
          </div>

          <div className='form-group mt-2 btn-block w-100'>
          <GoogleLogin
          clientId="YOUR_GOOGLE_CLIENT_ID"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          />  
        </div>


          
        <div className='form-group mt-2'>
  
        <FacebookLogin
        appId="YOUR_FACEBOOK_APP_ID"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
       />
      </div>      
          
        </form>
      </Container>
    </div>
  )
}





