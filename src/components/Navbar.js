import React from "react";
import airbnbLogo from "../images/airbnb-logo.png"; 

export default function Navbar() {
    return (
        <nav>
            <img 
                src={airbnbLogo} 
                alt="Airbnb logo"
                className="nav--logo" 
            /> 
        </nav>
    );
}
