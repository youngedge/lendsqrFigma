import React from 'react';
import './User.css';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import profile from '../Asssets/profile.svg';
import StarIcon from '@mui/icons-material/Star'; 
import { useNavigate } from 'react-router-dom';

export const User = () => {
    const navigate = useNavigate();
    const handleClick = ()=> {navigate("../Dashboard")}
    return (
        <div className="Dash">
            <Sidebar />
            <div className="container">
                <Navbar />
                <div className='Arrow'><HiOutlineArrowLongLeft onClick={handleClick}/>
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
                <div className="divider1"></div>
                <div className="divider2"></div>
                <div className="divider3"></div>
                <div className="divider4"></div>
                {/* 1st DIVIDER */}
                <div class="info-grid">
                <div className="pInfo">Personal Information</div>
                <div className="fName1">Full Name:</div>
                <div className="fName2">Grace Effiom</div>
                <div className="pNumber">Phone Number:</div> 
                <div className="PNumber">07060780922</div>
                <div className="eAddress">Email Address:</div>
                <div className="Eaddress">grace@gmail.com</div>
                <div className="BVN1">BVN:</div>
                <div className="BVN2">07060780922</div>
                <div className="gender1">Gender:</div>
                <div className="gender2">Female</div>
                <div className="mStatus">Marital Status:</div> 
                <div className="Mstatus">Single</div> 
                <div className="Kids1">Children:</div> 
                <div className="Kids2">None</div>
                <div className="Location1">Type of Residence:</div>
                <div className="Location2">Parent's Apartment</div>
                </div>
                {/* 2ND DIVIDER */}
                <div class="info-section"> 
                <div className='employment1'>Education and Employment</div>
                <div class="edu1">Level of Education:</div>
                <div class="edu2">B.Sc</div>
                <div class="status1">Employment Status:</div> 
                <div class="status2">Employed</div>
                <div class="sector1">Sector of Employment:</div>
                <div class="sector2">FinTech</div>
                <div class="duration1">Duration of Employment:</div>
                <div class="duration2">2 years</div>
                <div class="Oemail1">Office Email:</div>
                <div class="Oemail2">grace@lendsqr.com</div>
                <div class="income1">Monthly income:</div>
                <div class="income2">₦200,000.00 - ₦400,000.00</div>
                <div class="repay1">Loan Repayment:</div> 
                <div class="repay2">40,000</div> 
                </div>
                    {/* 3RD DIVIDER */}
                 <div className="socials">socials</div>
                 <div className="twitter1">Twitter:</div>
                 <div className="twitter2">@grace_effiom</div>
                 <div className="FB1">Facebook:</div>
                 <div className="FB2">Grace Effiom</div>
                 <div className="FB3">Instagram:</div>
                 <div className="FB4">@grace_effiom</div>

                    {/* 4TH DIVIDER */}
                   <div class="guarantor">Guarantor</div>
                   <div class="name1">Full Name:</div>
                   <div class="name2">Debby Ogana</div>
                   <div class="number1">Phone Number:</div> 
                   <div class="number2">07060780922</div>
                   <div class="address1">Email Address:</div>
                   <div class="address2">debby@gmail.com</div>
                   <div class="relation1">Relationship:</div> 
                   <div class="relation2">Sister</div> 
                   
                    {/* 5TH DIVIDER */}
                   <div class="Name1">Full Name:</div>
                   <div class="Name2">Debby Ogana</div>
                   <div class="Number1">Phone Number:</div> 
                   <div class="Number2">07060780922</div>
                   <div class="Address1">Email Address:</div>
                   <div class="Address2">debby@gmail.com</div>
                   <div class="Relation1">Relationship:</div> 
                   <div class="Relation2">Sister</div> 
        </div>  
    );  
}  
export default User;