import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

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
          <div className="nav-logo">
            <Link to="/"><h1>David Alsabrook</h1></Link>
          </div>
          <ul className='nav-list col-5'>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
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
      </footer>
    </div>
  );
}

function Home() {
  return (
    <main>
      <p>Home page</p>
    </main>
  )
}

function Portfolio() {
  return (
    <main>
      <p>Portfilio page</p>
    </main>
  )
}

function Resume() {
  return (
    <main>
      <p>Resume page</p>
    </main>
  )
}

function About() {
  return (
    <main>
      <p>About page</p>
    </main>
  )
}

function Contact() {
  return (
    <main>
      <p>Contact page</p>
    </main>
  )
}

export default App;
