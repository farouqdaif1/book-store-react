import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book } = props;

  return (
    <li id={book.id}>
      <p className="book-title">{book.title}</p>
      <p className="book-author">{book.author}</p>
      <button type="submit" className="remove-btn">REMOVE</button>
    </li>
  );
};
Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};
export default Book;
