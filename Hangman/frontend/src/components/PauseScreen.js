import React from 'react';

const PauseScreen = ({ setScreen }) => {
  return (
    <section id="pause-screen" className="screen">
      <h1>Game Paused</h1>
      <button onClick={() => setScreen('game')} className="play-button">Resume Game</button>
      <button onClick={() => setScreen('start')} className="play-button">New Category</button>
      <button onClick={() => setScreen('start')} className="play-button">Quit Game</button>
    </section>
  );
};

export default PauseScreen;
