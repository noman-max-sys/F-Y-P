'use client'; // Add this directive at the top

import React from 'react';
import  './Login.css';

const Login = ({ onClose }) => {
  return (
    <div className='wrapper'>
      <div className='login-form'>
        <form action=''>
          <h1>Login</h1>
          <div className='input-box'>
            <input type='text' placeholder='Username' required />
          </div>
          <div className='input-box'>
            <input type='password' placeholder='Password' required />
          </div>
          <div className='remember-forgot'>
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href='#'>Forget Password</a>
          </div>
          <button type='submit'>Login</button>
          <div className='register-link'>
            <p>
              Don't have an account? <a href='#'>Register</a>
            </p>
          </div>
          <button type="button" className="close-btn" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
