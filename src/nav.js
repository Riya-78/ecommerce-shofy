import React, { useState } from "react";
import { FaTruckMoving } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./nav.css";
const Nav = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <>
      <div className="free">
        <div className="free-icon">
          <FaTruckMoving />
        </div>
        <p>FREE Shipping on shopping above $1000</p>
      </div>
      <div className="main_header">
        <div className="container">
            
            <div className="logo">
                <img src="./img/logo.svg" alt="logo"></img>
            </div>
 
            <div className="nav">
                <ul>
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="/product" className="link">Product</Link></li>
                    <li><Link to="/about" className="link">About</Link></li>
                    <li><Link to="/contact" className="link">Contact</Link></li>
                </ul>
            </div>
              

            <div className="icon">

                {/* PROFILE ICON HERE */}
                {isAuthenticated && (
                    <div className="account">
                        <div className="user_icon">
                        <AiOutlineUser />
                        </div>
                        <p>{user.name}</p>
                    </div>
                )}

                {/* CART ICON HERE */}
                <div className="second_icon">
                    <Link to="/cart" className="link"> <BsBagCheck /> </Link>
                </div>

                {/* LOGIN LOGOUT ICON HERE */}
                <div className="auth">
                    {isAuthenticated ? 
                    ( <button onClick={() => logout({
                            logoutParams: { returnTo: window.location.origin },
                        })} > <CiLogout /> </button>
                    ) : ( <button onClick={() => loginWithRedirect()}> <CiLogin /> </button> )}
                </div>

            </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
