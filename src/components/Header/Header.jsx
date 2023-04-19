import React from 'react';
import "./Header.css"
import {Link, NavLink} from "react-router-dom";
function Header(props) {
    return (
        <div className="header">
            <p className="logo"><Link to={"/"}>ChartCalc</Link></p>
            <ul className="options">
                <li><Link to={"/dispersion"}>Dispersion</Link></li>
                <li><Link>About us</Link></li>
            </ul>
            <div></div>
        </div>
    );
}

export default Header;