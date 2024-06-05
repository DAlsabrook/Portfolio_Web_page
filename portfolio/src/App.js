import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
    </div>
  );
}

function Navbar() {
  let navStyle = {};
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navStyle = { backgroundColor: 'black' };
  } else {
    navStyle = { backgroundColor: 'transparent' };
  }
  return (
    <div className="nav-bar" style={navStyle}>
      <div className="nav-logo">
        <h1>David Alsabrook</h1>
      </div>
      <div className="nav-btns col-5">
        <a href="#" className="col-2">Portfilio</a>
        <a href="#" className="col-2">Resume</a>
        <a href="#" className="col-2">About</a>
        <a href="#" className="col-4">Contact</a>
      </div>
    </div>
  )
}

function Banner() {
  return (
    <div>
      <img src="./logo192.png" alt="idk"></img>
    </div>
  )
}

export default App;
