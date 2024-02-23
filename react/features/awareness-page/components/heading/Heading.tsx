import React from "react";
import './Heading.css'
function Heading() {
    return (
        <div className="heading">
            <div className="goHome">
            <a href={'/'}>
                Go back home
            </a>
            </div>
            <p>Stay Secure: Deepfake Audio Awareness Quiz</p>
        </div>
    )
}

export default Heading