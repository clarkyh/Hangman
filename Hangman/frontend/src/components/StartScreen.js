import React, { useCallback } from 'react';

const StartScreen = ({ setScreen, selectCategory, categories }) => {
  const handleSelectCategory = useCallback(
    (category) => selectCategory(category),
    [selectCategory]
  );

  return (
    <section id="start-screen" className="screen active">
      <h1>How to Play</h1>
      <ol>
        <li>Choose a category</li>
        <li>Guess letters</li>
        <li>Win or lose</li>
      </ol>
      <div>
        {Object.keys(categories).map(category => (
          <button 
            key={category} 
            onClick={() => handleSelectCategory(category)} 
            className="play-button"
            aria-label={`Play ${category}`}
          >
            <img src="/assets/images/icon-play.svg" alt="Play Icon" />
            {category}
          </button>
        ))}
      </div>
    </section>
  );
};

export default StartScreen;
