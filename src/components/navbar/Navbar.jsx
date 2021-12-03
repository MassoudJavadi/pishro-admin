import React from 'react';
import './navbar.css';
import image1 from '../../assets/avatar1.jpg';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import logoImg from '../../img/mlogo.png';

export default function Navbar() {
    return (
        <div className="nav">
            <div className="navWrapper">

                <div className="navLeft">
                    <div className="wrap">
                    <div className="search">
                        <input type="text" className="searchTerm" placeholder="جستجو"/>
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                    </div>
                    
                </div>


                <div className="navRight">
                    <div className="navIconContainer">
                        <NotificationsNoneIcon/>
                    </div>
                    <div className="navIconContainer">
                        <QuestionAnswerOutlinedIcon />
                    </div>
                    <div className="navIconContainer2">
                        <ExpandMoreOutlinedIcon fontSize='small'/>
                    </div>

                    <div className='textContainer'>
                        <h5 className='upperText'>پیشرونت انرژی</h5>
                        <h6 className='lowerText'>پشتیبانی</h6>

                    </div>
                    <div className='imgContainer'>
                        <img src={image1} alt = "" className="navAvatar"/>
                        
                        <span className="navIconBadge"></span>
                    </div>


                    <div className="txtCon">
                         <h4 className="pmtxt">پنل مدیریت</h4>
                         <h5 className="mtxt">منتا</h5>
                        
                    </div>
                    <img src={logoImg} alt="" className='logoImg'/>
                    

                </div>
            </div>
        </div>
    )
}
