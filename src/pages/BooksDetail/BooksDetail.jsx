import BookInfo from '../../components/BookInfo/BookInfo';
import './BooksDetail.css';
import React from 'react';
import { Link } from 'react-router-dom';

const BooksDetail = () => {
  return (
    <div>
      <div className='banner'>
      <h1>Books Detail Page</h1>
      <button className='btn'>
        <Link to='/books' className='nav-link'> ⇦ Back</Link>
        </button>
      </div>

      <BookInfo />
    </div>
  )
}

export default BooksDetail;