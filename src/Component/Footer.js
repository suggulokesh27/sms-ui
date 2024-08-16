import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";

const Footer = () =>{
    return(
        <div className="footer-container">
            <Link style={{
                color : "black",
                paddingLeft : "150px"
            }} to="/" >@Copy Right's : SVS</Link>
        </div>
    )
}

export default Footer;