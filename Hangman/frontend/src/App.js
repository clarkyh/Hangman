import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import PauseScreen from './components/PauseScreen';
import Header from './components/Header';
import WinScreen from './components/WinScreen';
import LoseScreen from './components/LoseScreen';

const App = () => {
  const [categories, setCategories] = useState({});
  const [screen, setScreen] = useState('start');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedWord, setSelectedWord] = useState('');
  const [health, setHealth] = useState(8);
  const [guessedLetters, setGuessedLetters] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/categories')
      .then(response => {
        console.log(response.data);
        setCategories(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  const selectCategory = (category) => {
    const words = categories[category];
    const unselectedWords = words.filter(word => !word.selected);
    if (unselectedWords.length === 0) {
      words.forEach(word => word.selected = false);
      return selectCategory(category);
    }
    const randomWord = unselectedWords[Math.floor(Math.random() * unselectedWords.length)];
    randomWord.selected = true;
    setSelectedCategory(category);
    setSelectedWord(randomWord.name);
    setHealth(8);
    setGuessedLetters([]);
    setScreen('game');
  };

  const guessLetter = (letter) => {
    if (guessedLetters.includes(letter)) return;
    setGuessedLetters([...guessedLetters, letter]);
    if (selectedWord.toUpperCase().includes(letter)) {
      if (selectedWord.split('').every(l => guessedLetters.includes(l.toUpperCase()) || l.toUpperCase() === letter)) {
        setScreen('win');
      }
    } else {
      setHealth(health - 1);
      if (health - 1 === 0) {
        setScreen('lose');
      }
    }
  };

  return (
    <div className="container">
      <Header />
      {screen === 'start' && <StartScreen setScreen={setScreen} selectCategory={selectCategory} categories={categories} />}
      {screen === 'game' && <GameScreen
        category={selectedCategory}
        word={selectedWord}
        health={health}
        guessedLetters={guessedLetters}
        guessLetter={guessLetter}
        setScreen={setScreen}
      />}
      {screen === 'pause' && <PauseScreen setScreen={setScreen} />}
      {screen === 'win' && <WinScreen setScreen={setScreen} />}
      {screen === 'lose' && <LoseScreen setScreen={setScreen} />}
    </div>
  );
};

export default App;
