import React from 'react';
// import logo from '../Asssets/Group.png';
import './Dash.css'
// import { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Widget from '../../Components/widget/Widget';
import Table from '../../Components/table/table'
import { LuListFilter } from "react-icons/lu";



export const Dash = () => {


return(
    <div className="Dash">
        <Sidebar />
        <div className="container">
            <Navbar />
            <div className="widget">
                <Widget type="USERS"/>
                <Widget type="ACTIVE USERS"/>
                <Widget type="USERS WITH LOANS"/>
                <Widget type="USERS WITH SAVINGS"/>
            </div>
            <div className="listcontainer">
                <div className="listtitle">
                    {/* <span> ORGANIZATION </span> 
                    <LuListFilter className='filtericon'/> */}
                </div>
                <Table />
            </div>
        </div>

    </div>
    )
}
export default Dash;