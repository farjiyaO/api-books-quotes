import React, { useEffect, useState } from 'react';
import { json, useParams } from 'react-router-dom';
import './BookInfo.css';

const BookInfo = () => {

  const { id } = useParams();
  console.log(id);
  const [booksDetails, setBooksDetails] = useState([]);

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
    .then(response => response.json())
    .then(json => {setBooksDetails(json)});
  }, []);

  console.log(booksDetails);
  return (
    <div className='book-info'>   
        <img src={booksDetails.image} alt="book image" />
        <div className='book-info-details'>
        <h2>Title: {booksDetails.title}</h2>
        <p>Year Published: {booksDetails.year_published}</p>
        <p>Title Sort:{booksDetails.title_sort}</p>
        <p>Description: {booksDetails.description}</p>
        </div>
        
    </div>
  );

};

export default BookInfo;