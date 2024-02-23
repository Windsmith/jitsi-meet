import React from "react"
import './Audio.css'
function Audio({audio}){
    return(
        <div className="audio">
            <audio controls>
            <source src={audio.default} type="audio/mp4" />
            </audio>
        </div>
    )
}
export default Audio