import React from 'react';
import "./Header.css";
import logo from "../assets/logo3.jpg";

const Header=()=>{
    return (
        <div className='header-container'>
            <div className='logo-search-container'> 
                <img src={logo} alt="" />
                <div>
                    <input type="text" />

                </div>
            </div>
        </div>
    );
};


export default Header;