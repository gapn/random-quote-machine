import React from 'react'
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

function App() {
  
  const [quote, setQuote] = useState("The best investment you can make is in yourself.")
  const [author, setAuthor] = useState("Warren Buffett")
  const colors = [
    '155, 197, 222', // Soft Blue
    '182, 222, 204', // Mint Green
    '249, 231, 159', // Pale Yellow
    '250, 177, 160', // Light Coral
    '204, 182, 222', // Lavender
    '189, 195, 199', // Light Grey
    '255, 204, 188', // Peach
    '133, 193, 233', // Sky Blue
    '163, 193, 173', // Sage Green
    '245, 183, 177', // Light Pink
    '243, 235, 220', // Cream
    '174, 214, 241'  // Light Azure
  ];
  const [accentColor, setAccentColor] = useState(colors[0]);

  async function getNewQuote() {
      const response = await fetch('https://api.quotable.io/quotes/random');
      const data = await response.json();
      setQuote(data[0].content);
      setAuthor(data[0].author);
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setAccentColor(randomColor);
  }

  useEffect(() => {
    getNewQuote();
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        getNewQuote();
      }
    };
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [getNewQuote]);

  return (
    <div 
      className='app-container d-flex flex-column justify-content-center align-items-center min-vh-100'
      style={{ '--accent-color': accentColor }}
    >
      <div id='quote-box'>
        <p id='text'>"{quote}"</p>
        <p id='author' className=''>~ {author} ~</p>
        <div id='quote-actions'>
          <a id='tweet-quote' target='_blank' href={`https://twitter.com/intent/tweet?text=${quote} ~ ${author} ~`}>
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <button id='new-quote' className='justify-content-right' onClick={getNewQuote}>New Quote</button>
        </div>
        <p className='keyboard-hint'>or press Enter / Space</p>
      </div>
      <div className='signature'>
        by Grega Pavlin
      </div>
    </div>
  );
}

export default App;
