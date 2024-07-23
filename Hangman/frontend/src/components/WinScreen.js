import React from 'react';

const WinScreen = ({ setScreen }) => {
  return (
    <section id="win-screen" className="screen active">
      <h1>Congratulations! You Won!</h1>
      <button onClick={() => setScreen('start')} className="play-button">Play Again</button>
    </section>
  );
};

export default WinScreen;
