import React from 'react';
import "../components/awarenessPage.css";
import NavBar from '../components/navbar/NavBar'; 
import Audio from '../components/audioBar/Audio';
import Questionnaire from './questionnaire/Questionnaire';
import Heading from '../components/heading/Heading';
class AwarenessPage extends React.Component {
    render() {
        return(
            <body>
            <NavBar/>
            <Heading/>
            <Audio audio={'./components/audioBar/Recording.m4a'}/>
            <Questionnaire isdeepfake={true}/>
            <Audio audio={'./components/audioBar/Recording.m4a'}/>
            <Questionnaire isdeepfake={false}/>
            <Audio audio={'./components/audioBar/Recording.m4a'}/>
            <Questionnaire isdeepfake={false}/>
            </body>
        )
    }
}

export default AwarenessPage
