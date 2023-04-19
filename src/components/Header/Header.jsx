import React from 'react';
import "./Header.css"
function Header(props) {
    return (
        <div className="header">
            <p className="logo">ChartCalc</p>
            <ul className="options">
                <li>Dispersion</li>
                <li>About us</li>
            </ul>
            <div></div>
        </div>
    );
}

export default Header;