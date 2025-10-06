import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BlogNavbar from './components/BlogNavbar';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <BlogNavbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;