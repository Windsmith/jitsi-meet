import React from 'react';
import './overview.css'

const Overview = ({ onStartQuiz }) => {
  return (
    <>
      <div className="banner">
        <a href="/"><img src="../../../../images/watermark.svg" alt="jitsi-logo"/></a>
        <p>Test your knowledge and awareness against the rising tide of deep fakes.</p>
      </div>  
      <div className='overview-background'>
        <div className='overview-box'>
          <h2>Welcome to the Deepfake Audio Awareness Quiz</h2>
          <p className='quiz-desc'>
            In this quiz, you will be presented with various audio samples. Your task is to identify
            whether each audio sample is a genuine recording or a deepfake (artificially generated).
            This quiz aims to raise your awareness of deepfake audios and help you develop the skills
            necessary to detect them.
            You will be presented with a few hints before the start of this quiz. You need to memorize them before
            they disappear from the screen. They will only be shown for a limited amount of time.
          </p>
          <button className='start-quiz-btn' onClick={onStartQuiz}>Start Quiz</button>
        </div>
      </div>
    </>
  );
};

export default Overview;