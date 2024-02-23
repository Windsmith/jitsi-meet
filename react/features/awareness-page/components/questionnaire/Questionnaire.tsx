import React from "react";
import './Questionnaire.css'

function Questionnaire(isdeepfake){
    return(
        <div className="containerQ">
            <div className="checkBox1">
                <input type="radio" id="isDeepFake" name="boolean"/>
                <label>It is a deepfake</label>
            </div>

            <div className="checkBox2">
                <input type="radio" id="notDeepFake" name="boolean"/>
                <label>It is not a deepfake</label>
            </div>
        </div>
    )
}

export default Questionnaire;