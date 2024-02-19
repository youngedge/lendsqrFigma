import './Navbar.css';
import { IoSearch } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import avatar from "../assets/avatar.jpg";
import { MdArrowDropDown } from "react-icons/md";

export const Navbar = () => {
    return (
        <div className='wrapper'>
            <div className="search">
                <input type="text" placeholder='Search for anything' />
                <IoSearch className='searchicon'/>
            </div>
            <div className="items">
                <div className="item">
                    <a href="#">
                        Docs
                    </a>
                </div>
                <div className="item">
                    <CiBellOn />
                </div>
                <div className="item">
                    <img src={avatar} alt=" Profile " />
                </div>
                <div className="item">
                    <p className='username'>
                        Adedeji
                        <MdArrowDropDown />
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Navbar;