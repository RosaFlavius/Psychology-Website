import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <Router>
        <div className="app-container">
          <Navbar />
          <Routes className="routes-container">
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<div>Content for Item about</div>} />
            <Route
              path="/approach"
              element={<div>Content for Item approach</div>}
            />
            <Route
              path="/how-it-works"
              element={<div>Content for Item how-it-works</div>}
            />
            <Route
              path="/resources"
              element={<div>Content for Item resources</div>}
            />
            <Route path="/blog" element={<div>Content for Item blog</div>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
