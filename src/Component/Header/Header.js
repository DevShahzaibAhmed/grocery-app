import React from 'react';
import "./Header.css";
import logo from "../assets/q.svg";
import {BiSearchAlt} from 'react-icons/bi';


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
        </div>
    );
};


export default Header;