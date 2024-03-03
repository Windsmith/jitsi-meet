import React from 'react';
import { useState } from 'react'
import { quiz } from './questions'
import './awarenessPage.css'
import ReactAudioPlayer from 'react-audio-player';

const AwarenessPage = () => {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    });

    const { questions } = quiz;
    const { choices, correctAnswer } = questions[activeQuestion];
    const { audioSrc } = questions[activeQuestion]; // Each question has an audioSrc property

    const onClickNext = () => {
        setSelectedAnswerIndex(null);
        setResult((prev) =>
            selectedAnswer
                ? {
                    ...prev,
                    score: prev.score + 5,
                    correctAnswers: prev.correctAnswers + 1,
                }
                : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
        );
        if (activeQuestion !== questions.length - 1) {
            setActiveQuestion((prev) => prev + 1);
        } else {
            setActiveQuestion(0);
            setShowResult(true);
        }
    };

    const onAnswerSelected = (answer, index) => {
        setSelectedAnswerIndex(index);
        if (answer === correctAnswer) {
            setSelectedAnswer(true);
        } else {
            setSelectedAnswer(false);
        }
    };

    const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

    return (
        <>
            <div className="banner">
                <a href="/"><img src="../../../../images/watermark.svg" alt="jitsi-logo"/></a>
                <p>Test your knowledge and awareness against the rising tide of deep fakes.</p>
            </div>
            <div className="background-stuff">
                <div className="quiz-container">
                    {!showResult ? (
                        <div>
                            <div>
                                <span
                                    className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
                                <span
                                    className="total-question">/{addLeadingZero(questions.length)}</span>
                            </div>
                            {/*Cycles through next audio.*/}
                            <ReactAudioPlayer src={audioSrc} autoPlay controls/>
                            <ul>
                                {choices.map((answer, index) => (
                                    <li
                                        onClick={() => onAnswerSelected(answer, index)}
                                        key={answer}
                                        className={selectedAnswerIndex === index ? 'selected-answer' : null}
                                    >
                                        {answer}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex-right">
                                <button onClick={onClickNext}
                                        disabled={selectedAnswerIndex === null}>
                                    {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="result">
                            <h3>Result</h3>
                            <p>Total Question: <span>{questions.length}</span>
                            </p>
                            <p>Total Score:<span> {result.score}</span></p>
                            <p>Correct
                                Answers:<span> {result.correctAnswers}</span>
                            </p>
                            <p>Wrong Answers:<span> {result.wrongAnswers}</span>
                            </p>
                            <p>Deepfake audios sound robotic and unnatural.</p>
                            <a className="awareness-page-href" href={'/'}>Go back to homepage</a>
                            <br/>
                            <a className="awareness-page-href" href={'/awareness-page'}>or try again!</a>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default AwarenessPage;
