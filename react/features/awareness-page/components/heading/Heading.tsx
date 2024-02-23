import React from "react";
import './Heading.css'
function Heading() {
    return (
        <div className="headingForGame">
            <div className="goHome">
            <a className="tag"href={'/'}>
                Go back home
            </a>
            </div>
            <p className="paragraph">Stay Secure: Deepfake Audio Awareness Quiz</p>
        </div>
    )
}

export default Heading