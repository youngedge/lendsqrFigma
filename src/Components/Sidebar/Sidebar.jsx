import './Sidebar.css';
import logo from '../assets/logo.jpg'
import { FaHome } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import sack from '../assets/sack 1.jpg';

export const Sidebar = () => {
    return (
        <div className='Sidebar'>
            <div className="top">
                <img src={logo} alt="sign in" className="logo" />
            </div>
            <div className="center">
                <ul>
                    <li>
                        <span> Switch Organization </span>
                    </li>
                    <li>
                        <FaHome />
                        <span> Dashboard </span>
                    </li>
                    <li>
                        <FaUserGroup />
                        <span> Users </span>
                    </li>
                    <li>
                        <FaUsers />
                        <span> Guarantors </span>
                    </li>
                    <li>
                        <img src={sack} alt="sign in" className="sack" />
                        <span> Loans </span>
                    </li>
                    <li>
                        <span> Decision Models </span>
                    </li>
                    <li>
                        <span> Savings </span>
                    </li>
                    <li>
                        <span> Loan Request </span>
                    </li>
                    <li>
                        <span> Whitelist </span>
                    </li>
                    <li>
                        <span> Karma </span>
                    </li>
                    <li>
                        <span> Organization </span>
                    </li>
                    <li>
                        <span> Loan Product </span>
                    </li>
                    <li>
                        <span> Saving Products </span>
                    </li>
                    <li>
                        <span> Fees and Charges </span>
                    </li>
                    <li>
                        <span> Transactions </span>
                    </li>
                    <li>
                        <span> Services </span>
                    </li>
                    <li>
                        <span> Service Account </span>
                    </li>
                    <li>
                        <span> Settlements </span>
                    </li>
                    <li>
                        <span> Reports </span>
                    </li>
                    <li>
                        <span> Preferences </span>
                    </li>
                    <li>
                        <span> Fees and Pricing </span>
                    </li>
                    <li>
                        <span> Audit Logs </span>
                    </li>
                </ul>
            </div>
            <div className="bottom"></div>
        </div>
    )
}
export default Sidebar;