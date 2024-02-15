import React from 'react';
import logo from '../Asssets/Group.png';
import bg from '../Asssets/pablo-sign-in 1.png';
import './Login.css';
// import Dash from '../Dashboard/Dash.jsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export const Login = () => {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const handleVisible = () => { setVisible(!visible) }
  const navigate = useNavigate();
  const handleClick = ()=> {navigate("../Dashboard")}

  return (
    <div className="body">
      <div className="container">
        <img src={logo} alt="sign in" className="logo" />
        <img src={bg} alt="bg" className="bg" />
      </div>
      <div className="Wrapper">
        <form action="" className="form">
          <h1>
            <b>Welcome!</b>
          </h1>
          <p>Enter details to login</p>
          <div className="input-box">
            <input type="text" placeholder="Email" required />
          </div>
          <div className="input-box">
            <input
              value={password}
              type={visible ? "text" : "password"}
              id="password"
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
          <button onClick={handleClick}>
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;