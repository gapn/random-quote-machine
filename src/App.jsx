import React from 'react'
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  
  const [quote, setQuote] = useState("The best investment you can make is in yourself.")
  const [author, setAuthor] = useState("Warren Buffett")

  async function getNewQuote() {
      const response = await fetch("https://api.quotable.io/quotes/random");
      const data = await response.json();
      setQuote(data[0].content);
      setAuthor(data[0].author);
  }

  useEffect(() => {
    getNewQuote();
  }, [])

  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100'>
      <div id="quote-box" className='width-30'>
        <p id="text">"{quote}"</p>
        <p id="author">~ {author} ~</p>
        <button id="new-quote" onClick={getNewQuote}>New Quote</button>
        <a id="tweet-quote" target="_blank" href={`https://twitter.com/intent/tweet?text=${quote} ~ ${author} ~`}>Tweet</a>
      </div>
    </div>
  );
}

export default App;
