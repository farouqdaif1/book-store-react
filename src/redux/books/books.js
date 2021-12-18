import { newBook, getBooks, deleteBook } from '../../Api/api';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
// initial state to be an empty array of books:
const initialState = [];
// Actions
export const addBook = (book) => async (dispatch) => {
  await newBook(book);
  dispatch({
    type: ADD_BOOK,
    book,
  });
};
export const removeBook = (book) => async (dispatch) => {
  await deleteBook(book);
  dispatch({
    type: REMOVE_BOOK,
    book,
  });
};
export const getAllbooks = () => async (dispatch) => {
  const booksdata = await getBooks();

  const books = Object.entries(booksdata).map(([key, value]) => {
    const [bookData] = value;

    return {
      item_id: key,
      ...bookData,
    };
  });
  dispatch({
    type: GET_BOOKS,
    books,
  });
};
// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.book.item_id);
    case GET_BOOKS:
      return [...state, ...action.books];
    default:
      return state;
  }
};

export default reducer;
