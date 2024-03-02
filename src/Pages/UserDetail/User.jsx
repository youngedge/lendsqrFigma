import React from 'react';
import './User.css';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import profile from '../Asssets/profile.svg';
import StarIcon from '@mui/icons-material/Star'; 


export const User = () => {

    return (
        <div className="Dash">
            <Sidebar />
            <div className="container">
                <Navbar />
                <div className='Arrow'><HiOutlineArrowLongLeft />
                </div>
                <div className='Users'>
                    User Details
                </div>
                <div className='back'>
                    Back to Users
                </div>
                <button className='btnStyle1'>
                        BLACKLIST USER
                </button>
                <button className='btnStyle2'> 
                        ACTIVATE USER
                </button>
            <div className="bar">
                <div className='userProfile'>
                <img src={profile} alt="sign in" className="profile" />
                </div>
                <div className="vertical-line1"></div>
                <div className="vertical-line2"></div>
                <div className='name'>
                    Grace Effiom
                </div>
                <div className='key'>
                LSQFf587g90
                </div>
                <div className='user-tier'>
                    User's Tier
                </div>
                <div className='amt'>$200,000.00</div>
                <div className='acc'>9912345678/Providus Bank</div>
                <div className='star'>
                <div style={{ display: 'flex' }}> {/* For side-by-side layout */}
                <StarIcon style={{ color: '#E9B200' }} />
                <StarIcon style={{ color: 'whitesmoke' }} />
                <StarIcon style={{ color: 'whitesmoke' }} />
                </div>
                </div>
            </div>
            <div className="main"></div>
            </div>
                {/* <div className='mainTask'> */}
                    <div className='GT'>General Details</div>
                    <div className='DOC'>Document       </div>
                    <div className='BD'>Bank details   </div>
                    <div className='LOANS'>Loans          </div>
                    <div className='SAVINGS'>Savings          </div>
                    <div className='AS'>App and System </div>
                {/* </div> */}
                <div className='horizontal'></div>
        </div>
    );
}
export default User;