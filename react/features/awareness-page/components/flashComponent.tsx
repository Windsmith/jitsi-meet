import React, { useEffect, useState } from 'react';

const hints = [
  'Listen for unnatural pauses or stuttering',
  'Pay attention to voice quality and clarity',
  'Analyze the emotional tone and inflection',
  'Watch out for inconsistencies or background noise',
  "Let's begin"
];

const FlashHints = ({ duration = 40000, onComplete }) => {
  const [currentHint, setCurrentHint] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHint((prevHint) => (prevHint + 1) % hints.length);
    }, duration / hints.length);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      onComplete();
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [duration, onComplete]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'white' }}>
      <h1 style={{color: currentHint === hints.length - 1 ? '#2563eb' : 'black',}}>
        {hints[currentHint]}
      </h1>
    </div>
  );
};

export default FlashHints;