import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Navbar from './components/NavBar';
import BooksPage from './components/BooksPage';
import CategoriesPage from './components/CategoriesPage';

const dummyList = [{
  id: 1, title: 'The Hunger Games', author: 'Suzanne Collins',
}, {
  id: 2, title: 'Dune', author: 'Frank Herbert',
}, {
  id: 3, title: 'Capital in the Twenty-First Century', author: 'Suzanne Collins',
}];

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<BooksPage bookList={dummyList} />} />
        <Route exact path="/categories" element={<CategoriesPage />} />
      </Routes>
    </Router>
  );
}
export default App;
