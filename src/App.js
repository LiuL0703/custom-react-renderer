import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [showLogo, setShowLogo] = useState(true);
  return (
    <div 
      className="App" 
      onClick={()=> {
        console.log('----')
        setShowLogo(show => !show)
      }}
    >
      <header className="App-header" style={{minHeight: 300}}>
        {showLogo && <img src={logo} className="App-logo" alt="logo" />}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div style={{height:300, marginTop: 50, fontSize: 25}}>
        <button style={{width: 80, height: 50, borderRadius: 10, marginRight: 30, outline: 'none',fontSize: 25}} onClick={()=> setCount(count+1)}>+</button>
        {count}
        <button style={{width: 80, height: 50, borderRadius: 10, marginLeft: 30, outline: 'none', fontSize: 25}} onClick={()=> setCount(count-1)}>-</button>
      </div>
    </div>
  );
}

export default App;
