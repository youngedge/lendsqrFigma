import React from 'react';
import logo from '../Asssets/Group.png';
import './Dash.css'
import { useState } from 'react';
import Navbar from '../../Components/Navb/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';



export const Dash = () => {


return(
    <div className="Dash">
        <Sidebar />
        <div className="container">Container</div>

    </div>
    )
}
export default Dash;