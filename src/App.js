import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Navbar from './components/NavBar';
import BooksPage from './components/BooksPage';
import CategoriesPage from './components/CategoriesPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<BooksPage />} />
        <Route exact path="/categories" element={<CategoriesPage />} />
      </Routes>
    </Router>
  );
}
export default App;
