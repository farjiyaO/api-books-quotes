import React, { useEffect, useState } from 'react';
import './Quote.css';

const Quote = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/quotes/random/10').then(response => response.json()).then(data => {
        setQuotes(data); 
      });
  }, []); 

  return (
    <div className="main-container">
      <h2>Quotes of the Day!!</h2>
      {quotes.map((quote) => {
        return (
          <div className="quote-container" key={quote.id}>
            <p>Quote: {quote.text}</p>
            <p>From: {quote.book.title}</p>
          </div>
        )
      })}
    </div>
  );
};

export default Quote;
