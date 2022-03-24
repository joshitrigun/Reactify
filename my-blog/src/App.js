import React from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesList from './pages/ArticlesList';
import ArticlePage from './pages/ArticlePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div id="page-body">
        <Router>
          <Routes>

            <Route path="/" element={<HomePage />} exact />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles-list" element={<ArticlesList />} />
            <Route path="/article" element={<ArticlePage />} />

          </Routes>
        </Router>
      </div>
    </div >
  );
}

export default App;
