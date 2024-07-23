import React from 'react';

const LoseScreen = ({ setScreen }) => {
  return (
    <section id="lose-screen" className="screen active">
      <h1>Game Over! You Lost!</h1>
      <button onClick={() => setScreen('start')} className="play-button">Try Again</button>
    </section>
  );
};

export default LoseScreen;
