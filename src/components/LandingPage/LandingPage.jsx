import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome to At Home Logger!');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          {/* <p>At Home Logger</p>

          <p>
          At Home Logger
          </p>

          <p>
          At Home Logger
          </p> */}
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already have an Account?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Log In
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
