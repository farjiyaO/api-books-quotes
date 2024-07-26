import React, { useEffect, useState } from 'react';
import { Link } from'react-router-dom';
import './Books.css';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/books').then(response => response.json()).then(data => {
        setBooks(data); 
      });
  }, []); 

  return (
    <div>
      <h1>Books Page</h1>
      <div className="books-container">
        {books.map((book) => (
          <div key={book.id} className="book">
            <Link className="btn-link" to={`/booksDetail/${book.id}`}>
              <img src={book.image} alt={`Cover of ${book.title}`} />
            </Link>
            <h2>{book.title}</h2>
            <button className="btn">
            <Link className="btn-link" to={`/booksDetail/${book.id}`}> More details </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
