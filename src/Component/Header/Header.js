import React from 'react';
import "./Header.css";
import logo from "../assets/logo.png";
import callIcon from "../assets/call icon.svg";
import {BiSearchAlt, BiUser, BiHeart} from 'react-icons/bi';
import {BsCart2} from 'react-icons/bs';


const Header=()=>{
    return (
        <div className='header-container'>
            <div className='logo-search-container'> 
                <img src={logo} alt="" />
                <div className='search-cont'>
                    <BiSearchAlt className='icon'/>

                    <input type="text" placeholder='Search Products'/>
                </div>
            </div>

           <div className='contact-social-container'>
                    <div className='contact'>
                        <img src={callIcon} alt="" />
                    </div>
                        <p>Call Us <br/> <span>0311-1571185</span></p>
            <div>
                    <div> 
                         <BiUser/>
                    </div>

                    <div>
                         <BiHeart/>
                    </div>
                    
                    <div>
                        <BsCart2/>
                    </div>
                </div>
           </div>

        </div>
    );
};


export default Header;