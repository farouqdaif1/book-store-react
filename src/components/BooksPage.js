import React from 'react';
import PropTypes from 'prop-types';

import Form from './bookComponents/addBook';
import Book from './bookComponents/renderbook';

const BooksPage = (props) => {
  const { bookList } = props;
  return (
    <div>
      <ul>
        {bookList.map((book) => <Book key={book.id} book={book} />)}
      </ul>
      <Form />
    </div>
  );
};
BooksPage.propTypes = {
  bookList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BooksPage;
