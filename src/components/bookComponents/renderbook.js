import React from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import { removeBook } from '../../redux/books/books';

const Book = (props) => {
  const { book } = props;
  const percnt = 33;
  const dispatch = useDispatch();
  return (
    <li id={book.item_id} className="book-sec">
      <div className="book-info">
        <span className="book-cat">
          {` ${book.category}`}
        </span>
        <span className="book-name">
          {` ${book.title} `}
        </span>
        <div className="btn-sec">
          <button type="button" className="btn-c"> Comments </button>
          <div className="line-2" />
          <button type="submit" className="remove-btn btn-r" onClick={() => dispatch(removeBook(book))}>REMOVE</button>
          <div className="line-2" />
          <button type="button" className="btn-e"> Edit </button>
        </div>
      </div>

      <div className="col-2">
        <div className="prog-pie">
          <CircularProgressbar value={percnt} />
        </div>
        <div className="prog-info">
          <h2 className="prog-num">
            {percnt}
            %
          </h2>
          <p className="prog-comp">Completed</p>
        </div>
      </div>

      <div className="col-3">
        <p className="chap-curr">CURRENT CHAPTER</p>
        <p className="chap">Chapter 13</p>
        <button type="submit" className="update-btn">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};
Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};
export default Book;
