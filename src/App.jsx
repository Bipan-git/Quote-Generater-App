import React, { useState } from "react";
import quoteDisplay from "./component/QuoteDisplay";
import "./App.css";
const quotes = [
  {
    text: "Believe you can and you're halfway there.",
    author: "Rosevelt",
  },
  {
    text: "Succes is not final , failure is not fatal .",
    author: "Winston churchill",
  },
  {
    text: "Dream big and dare to fail .",
    author: "norman vaughan",
  },
  {
    text: "Turn your wounds into wisdom",
    author: "operah winfrey",
  },
];
export default function App() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const handleNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };
  return (
    <div className="App-container">
      <h1>Quote Generator</h1>
      <quoteDisplay text={currentQuote.text} author={quoteDisplay.author} />
      <button className="quote-btn" onClick={handleNewQuote}>
        New Quote
      </button>
    </div>
  );
}
