import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';
// import your Action Creators
const Form = () => {
  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    const title = e.target.querySelector('#title');
    const category = e.target.querySelector('#category');
    const newBook = {
      item_id: uuidv4(),
      title: title.value,
      category: category.value,
    };
    title.value = '';
    category.value = '';
    dispatch(addBook(newBook));
  };
  return (
    <form id="add-book-form" onSubmit={(e) => submitForm(e)}>
      <input id="title" placeholder="Book Title" />
      <input id="category" placeholder="Book category" />
      <button type="submit"> Add Book </button>
    </form>
  );
};
export default Form;
