import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {

  return (
    <div
      className='App-Name'
      // style={{
      //   backgroundImage: "url(/bach.png)",
      //   backgroundPosition: 'center',
      //   backgroundSize: 'cover',
      //   backgroundRepeat: 'no-repeat',
      // }}
      >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my Articles Section
        </p>
        <p>
          COMING SOON
        </p>
        <a
          className="App-link"
          href="https://ahmadalfrehan.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home Screen
        </a>
      </header>
    </div>
  );
}

export default App;
