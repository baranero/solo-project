import React from "react";
import Email from "../images/Icon.png"
import LinkedIn from "../images/Vector.png"

export default function Main() {
    return (
        <div className="main-section">
            <h1>Jakub Baran</h1>
            <h4>Junior Frontend Developer</h4>
            <h5>jakubbaran.website</h5>
            <div className="button-row">
                <a href="mailto:jakub.baran2@gmail.com" target="blank">
                    <button className="email-button">
                    <img src={Email} />
                    Email
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/jakub-baran-42a00522b/" target="blank"><button className="linkedin-button">
                    <img src={LinkedIn}/>
                    LinkedIn
                    </button>
                </a>
            </div>
            <h3>About</h3>
            <p>I am learning React to start job as a junior frontend developer. I have already mastered the javascript programming knowledge and designing web in HTML and CSS.</p>
            <h3>Interests</h3>
            <p>Hiking. Climbing. Mountain biking. Rope rescue. Firefighting. Rescuing. Taking off cats from trees. Coffee lover.</p>
        </div>
    )
}