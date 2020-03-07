import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [showLogo, setShowLogo] = useState(true);
  const [color, setColor] = useState('red');

  useEffect(()=>{
    const colors = ['red','blue','yellow','green','pink','lightblue'];
    let i = 0;
    let interval = setInterval(()=>{
      i++;
      setColor(colors[i%6])
    }, 3000);
    return ()=>{
      clearInterval(interval);
    }
  },[])

  return (
    <>
      <div 
        className="App" 
        onClick={()=> {
          console.log('----')
          setShowLogo(show => !show)
        }}
      >
        <header className="App-header" style={{minHeight: 300}}>
          {showLogo && <img src={logo} className="App-logo" alt="logo" />}
          <p bgColor={color}>
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
      </div>
      <div style={{height:300, marginTop: 50, fontSize: 25 }}>
        <button style={{width: 80, height: 50, borderRadius: 10, marginRight: 30, outline: 'none',fontSize: 25}} onClick={()=> setCount(count+1)}>+</button>
        <div>{count}</div>
        <button style={{width: 80, height: 50, borderRadius: 10, marginLeft: 30, outline: 'none', fontSize: 25}} onClick={()=> setCount(count-1)}>-</button>
      </div>
    </>
  );
}

export default App;
