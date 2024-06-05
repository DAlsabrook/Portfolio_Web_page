import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Components
import Home from "./components/Home.js"
import Portfolio from "./components/Portfolio.js"
import About from "./components/About.js"
import Contact from "./components/Contact.js"
import Resume from "./components/Resume.js"

// Stylesheets
import './App.css';

function App() {

  let navStyle = {};

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navStyle = { backgroundColor: 'black' };
  } else {
    navStyle = { backgroundColor: 'transparent' };
  }

  return (
    <div className="App">
      <Router>
        {/* Navigation bar */}
        <nav className='nav-bar col-12' style={navStyle}>
          <div className='content-container'>
            <div className='nav-bar-content'>
              <div className="nav-logo">
                <Link to="/"><h1>David Alsabrook</h1></Link>
              </div>
              <div className='nav-links col-5'>
                <ul className='nav-list col-9'>
                  <li><Link to="/portfolio">Portfolio</Link></li>
                  <li><Link to="/resume">Resume</Link></li>
                  <li><Link to="/about">About</Link></li>
                </ul>
                <div className='contact-btn'><Link to="/contact">Contact</Link></div>
              </div>
            </div>
          </div>
        </nav>

        {/* SPA Content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </Router>

      {/* Footer */}
      <footer>
        <div className='content-container'>
          <div className='footer-content'>
            <div className='footer-name'>
              <h1>David Alsabrook</h1>
            </div>
            <div className='footer-social'>
              <h1>Social</h1>
              <ul className='footer-list'>
                <li><a href="">LinkedIn</a></li>
                <li><a href="">Github</a></li>
                <li><a href="">Medium</a></li>
                <li><a href="">HireAtlasGrads.com</a></li>
              </ul>
            </div>
            <div className='footer-legal'>
              <p>Copyright 2024 David Alsabrook</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
