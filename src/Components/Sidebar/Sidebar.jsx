import './Sidebar.css';
import logo from '../assets/logo.jpg'
import { FaHome } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { TbMoneybag } from "react-icons/tb";
import { GiShakingHands } from "react-icons/gi";
import { FaPiggyBank } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { FaUserCheck } from "react-icons/fa6";
import { FaUserXmark } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import { BsBank } from "react-icons/bs";
import { BiSolidCoinStack } from "react-icons/bi";
import { GrTransaction } from "react-icons/gr";
import { GiFlowerTwirl } from "react-icons/gi";
import { FaUserGear } from "react-icons/fa6";
import { FaScroll } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { RiEqualizerFill } from "react-icons/ri";
import { LuBadgePercent } from "react-icons/lu";
import { TbClipboardList } from "react-icons/tb";


export const Sidebar = () => {
    return (
        <div className='Sidebar'>
            <div className="top">
                <img src={logo} alt="sign in" className="logo" />
            </div>
            <div className="center">
                <ul>
                    <li>
                        <FaBriefcase className="icon" />
                        <span> Switch Organization </span>
                        <GoChevronDown className="icon" />
                    </li>
                    <li className='dashBoard'>
                        <FaHome className="icon" />
                        <span> Dashboard </span>
                    </li>
                    <p className="title">CUSTOMERS</p>
                    <li>
                        <FaUserGroup className="icon" />
                        <span> Users </span>
                    </li>
                    <li>
                        <FaUsers className="icon" />
                        <span> Guarantors </span>
                    </li>
                    <li>
                        <TbMoneybag className="icon" />
                        <span> Loans </span>
                    </li>
                    <li>
                        <GiShakingHands className="icon" />
                        <span> Decision Models </span>
                    </li>
                    <li>
                        <FaPiggyBank className="icon" />
                        <span> Savings </span>
                    </li>
                    <li>
                        <GiReceiveMoney className="icon" />
                        <span> Loan Request </span>
                    </li>
                    <li>
                        <FaUserCheck className="icon" />
                        <span> Whitelist </span>
                    </li>
                    <li>
                        <FaUserXmark className="icon" />
                        <span> Karma </span>
                    </li>
                    <p className="title">BUSINESSES</p>
                    <li>
                        <FaBriefcase className="icon" />
                        <span> Organization </span>
                    </li>
                    <li>
                        <GiReceiveMoney className="icon" />
                        <span> Loan Product </span>
                    </li>
                    <li>
                        <BsBank className="icon" />
                        <span> Saving Products </span>
                    </li>
                    <li>
                        <BiSolidCoinStack className="icon" />
                        <span> Fees and Charges </span>
                    </li>
                    <li>
                        <GrTransaction className="icon" />
                        <span> Transactions </span>
                    </li>
                    <li>
                        <GiFlowerTwirl className='icon'/>
                        <span> Services </span>
                    </li>
                    <li>
                        <FaUserGear className="icon" />
                        <span> Service Account </span>
                    </li>
                    <li>
                        <FaScroll  className='icon'/>
                        <span> Settlements </span>
                    </li>
                    <li>
                        <VscGraph className="icon" />
                        <span> Reports </span>
                    </li>
                    <p className="title">SETTINGS</p>
                    <li>
                        <RiEqualizerFill className="icon" />
                        <span> Preferences </span>
                    </li>
                    <li>
                        <LuBadgePercent className='icon'/>
                        <span> Fees and Pricing </span>
                    </li>
                    <li>
                        <TbClipboardList className='icon'/>
                        <span> Audit Logs </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Sidebar;