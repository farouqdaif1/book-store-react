import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from './bookComponents/addBook';
import Book from './bookComponents/renderbook';
import { getAllbooks } from '../redux/books/books';

const BooksPage = () => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state);
  useEffect(() => {
    dispatch(getAllbooks());
  }, [dispatch]);
  return (
    <div>
      <ul>
        {bookList.booksReducer.map((book) => <Book key={book.item_id} book={book} />)}
      </ul>
      <Form />
    </div>
  );
};
export default BooksPage;
