import React, { useState } from 'react';
import ReportScreen from './Report';
import './login.css';
// import { Row, Col, CardBody, Card, Alert, Container, Form, Input, FormFeedback, Label, Button } from "reactstrap";


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://148.251.225.118:3200/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setLoggedIn(true);
        // Redirect to the report screen or perform any other necessary action
      } else {
        setError(data.res_desc || 'Login failed');
      }
    } catch (error) {
      setError('An error occurred while logging in');
    }
  };

  if (isLoggedIn) {
    // Render the report screen or redirect the user to the report screen
    return <ReportScreen />;
  }

  return (
    
    <div>
      <section class="ftco-section">
		<div class="container">
      <div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
					<h2 class="heading-section">Welcome to the page</h2>
				</div>
			</div>

      <div class="row justify-content-center">
      <div class="col-md-6 col-lg-5">
					<div class="login-wrap p-4 p-md-5">

      <div class="icon d-flex align-items-center justify-content-center">
      <i class="fa-light fa-user"></i>
		      	</div>
            <h3 class="text-center mb-4">Do you want to login?</h3>

    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>} 
      <div class="form-group">
        {/* <label htmlFor="username">Username:</label> */}
        <input
          type="text"
          class="form-control rounded-left"
          id="username"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
    
      <div class="form-group d-flex">
        {/* <label htmlFor="password">Password:</label> */}
        <input
          type="password"
          id="password"
          class="form-control rounded-left" 
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <br/><br/>
      <div className="form-group">
      <button type="login-btn" className='btn btn-primary rounded submit p-3 px-5'>
        Login
      </button>
      </div>


    </form>
    </div>
    </div>
    </div>
    </div>
    </section>
  </div>
  );
  
};

export default LoginForm;
