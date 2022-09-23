import React from "react";
import ProfilePhoto from "../images/profile-photo-2.jpg"

export default function Navbar() {
    return (
        <div className="navbar-section">
            <img className="profile-photo" src={ProfilePhoto} alt="Profile photo" />
        </div>
    )
}