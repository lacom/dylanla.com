import React from 'react';
import PropTypes from 'prop-types';

export default function BookList({ books }) {
  const bookLinks = books.map((book, idx) => (
    <li key={idx}>
      <div className="booklist-img">
        <a href={book.url} title={book.title}>
          <img src={`https://covers.openlibrary.org/b/isbn/${book.isbn_10}-S.jpg`} alt={book.title} />
        </a>
      </div>
      <div>
        <a href={book.url} title={book.title}>
          {book.title}
        </a>
        <div><em>{Array.isArray(book.authors) ? book.authors.join(', ') : book.authors}</em></div>
      </div>
    </li>
  ));

  return (
    <ul className="booklist">
      {bookLinks}
    </ul>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired
};