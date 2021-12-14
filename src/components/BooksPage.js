import React from 'react';
import { useSelector } from 'react-redux';
import Form from './bookComponents/addBook';
import Book from './bookComponents/renderbook';

const BooksPage = () => {
  const bookList = useSelector((state) => state);
  return (
    <div>
      <ul>
        {bookList.booksReducer.map((book) => <Book key={book.id} book={book} />)}
      </ul>
      <Form />
    </div>
  );
};
export default BooksPage;
