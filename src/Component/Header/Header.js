import React from "react";
import "./Header.css";
import logo from "../../../public/assets/logo.png";
import callIcon from "../../../public/assets/call icon.svg";
import { BiSearchAlt, BiUser, BiHeart } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header-container">
      <img className="logo" src={logo} alt="" />

      <div className="logo-search-container">
        <div className="search-cont">
          <BiSearchAlt className="icon" />
          <input type="text" placeholder="Search Products" />
        </div>
      </div>

      <div className="contact-social-container">
        <div className="contact">
          <img src={callIcon} alt="" />
          <p>
            Call Us <br /> <span>311 1571185</span>
          </p>
        </div>

        <div className="social-icon-container">
          <div className="headerIcon">
            <BiUser className="headerIcon-size" />
          </div>

          <div className="headerIcon">
            <BiHeart className="headerIcon-size" />
          </div>

          <div className="headerIcon">
            <BsCart2 className="headerIcon-size" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
