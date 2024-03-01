import React from 'react';
import './Dash.css'
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Widget from '../../Components/widget/Widget';
import List from '../../Components/table/table';



export const Dash = () => {


return (
    <div className="Dash">
        <Sidebar />
        <div className="container">
        <Navbar />
        <div className="UsersText">Users</div>
        <div className="widget">
            <Widget type="USERS" />
            <Widget type="ACTIVE USERS" />
            <Widget type="USERS WITH LOANS" />
            <Widget type="USERS WITH SAVINGS" />
        </div>
        <div className="listcontainer">
            <List />
        </div>
        </div>
    </div>
);
}
export default Dash;