import React from "react";
import Twitter from "../images/Twitter Icon.png"
import Facebook from "../images/Facebook Icon.png"
import Instagram from "../images/Instagram Icon.png"
import GitHub from "../images/GitHub Icon.png"

export default function Footer() {
    return (
        <div className="footer-section">
            <div className="pic-container">
                <img className="social-pic" src={Twitter}/>
                <img className="social-pic" src={Facebook}/>
                <img className="social-pic" src={Instagram}/>
                <img className="social-pic" src={GitHub}/>
            </div>
        </div>
    )
}