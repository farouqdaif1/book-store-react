import React from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { removeBook } from '../../redux/books/books';

const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();
  return (
    <li id={book.id}>
      <p className="book-title">{book.title}</p>
      <p className="book-author">{book.author}</p>
      <button type="submit" className="remove-btn" onClick={() => dispatch(removeBook(book))}>REMOVE</button>
    </li>
  );
};
Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};
export default Book;
