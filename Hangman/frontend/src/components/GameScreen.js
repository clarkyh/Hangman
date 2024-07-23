import React, { useMemo } from 'react';

const GameScreen = ({ category, word, health, guessedLetters, guessLetter, setScreen }) => {
  const displayWord = useMemo(() => {
    return word.split('').map((letter, index) => (
      <span key={index} className="letter">
        {guessedLetters.includes(letter.toUpperCase()) ? letter : '_'}
      </span>
    ));
  }, [word, guessedLetters]);

  const displayKeyboard = useMemo(() => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return letters.split('').map(letter => (
      <button
        key={letter}
        className="key"
        onClick={() => guessLetter(letter)}
        disabled={guessedLetters.includes(letter)}
      >
        {letter}
      </button>
    ));
  }, [guessedLetters, guessLetter]);

  return (
    <section id="game-screen" className="screen active">
      <button className="back-button" onClick={() => setScreen('start')} aria-label="Back to start">
        <img src="/assets/images/icon-back.svg" alt="Back Icon" />
      </button>
      <div className="category">Category: {category}</div>
      <div id="word-container">{displayWord}</div>
      <div id="keyboard">{displayKeyboard}</div>
      <div className="game-info">
        <div className="health">
          <img src="/assets/images/icon-heart.svg" alt="Heart Icon" /> {health}
        </div>
        <div id="game-message" className="hidden"></div>
      </div>
      <button onClick={() => setScreen('pause')} className="play-button" aria-label="Pause game">
        <img src="/assets/images/icon-menu.svg" alt="Menu Icon" />
        Pause
      </button>
    </section>
  );
};

export default GameScreen;
