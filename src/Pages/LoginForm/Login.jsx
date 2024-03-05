import React from 'react';
import logo from '../Asssets/Group.png';
import bg from '../Asssets/pablo-sign-in 1.png';
import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const handleVisible = () => { setVisible(!visible) }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Temporary for testing (replace with real fetch later):
      const Credentials = {
        users: [
          { email: 'staff1@lendsqr.com', password: 'lendsqr1' },
          { email: 'staff2@lendsqr.com',password: 'lendsqr2'},
          // Add more test users here if needed
        ]
      };

      const user = Credentials.users.find(user => user.email === email && user.password === password);

      if (user) {
        navigate('../Dashboard');  // Successful login
      } else {
        setErrorMessage('Wrong details'); // Error message
      }
    } catch (error) {
      // This catch block likely isn't needed with hardcoded data
      console.error('Unexpected error in testing:', error);
      setErrorMessage('An error occurred');
    }
  }

  return (
    <div className="body">
      <div className="container">
        <img src={logo} alt="sign in" className="logo" />
        <img src={bg} alt="bg" className="bg" />
      </div>
      <div className="Wrapper">
        <form action="" className="form" onSubmit={handleSubmit}>
          <h1>
            <b>Welcome!</b>
          </h1>
          <p>Enter details to login</p>
          <div className="input-box">
            <input type="text" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-box">
            <input
              type={visible ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <div className="label" onClick={handleVisible}>
              {visible ? <label> HIDE </label> : <label> SHOW </label>}
            </div>
          </div>
          <div className="forgot">
            <a href="#">Forgot Password?</a>
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>} 
          <button type='submit '>
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
