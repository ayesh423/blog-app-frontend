import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import BlogNavbar from './components/BlogNavbar';
import './App.css';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <BlogNavbar />
        <main className="main-content">
        <Home />
        </main>
      </div>
    </Router>
  );
};

export default App;