// import logo from './logo.svg';
import './App.css';
import Login from './Pages/LoginForm/Login';
import Dash from './Pages/Dashboard/Dash';
import User from './Pages/userDetails/User';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<Login/>} />x
            <Route path="Dashboard" element={<Dash/>} />
            <Route path= "User" element = {<User/>} />
          </Routes>
        </Router>

    </div>
  );
}

export default App;
