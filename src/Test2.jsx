import './App.css';
import { gaEvent } from './gAnalytics';
import { useState, useEffect } from 'react';

function Test2 () {
  const [count, setCount] = useState(0);

  const buttonClick = (text) => {
    gaEvent('event', 'custom_click', { page: 'main', button: text });
    setCount(count + 1);
  };
  const randButtonClick = (text) => {
    gaEvent('event', 'custom_click', { page: 'main', button: `rand ${text}` });
    setCount(count + 1);
  };
  function getRandom (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  const randNumber = getRandom(0, 100);
  useEffect(() => {
    document.title = 'Test2';
  }, []);
  return (
        <div className="App">
            <header className="App-header">
                <div >
                    <button onClick={() => buttonClick('7 answer')}>first answer</button>
                    <button onClick={() => buttonClick('8 answer')}>second answer</button>
                    <button onClick={() => randButtonClick(randNumber)}>random {randNumber}</button>
                </div>
            </header>
        </div>

  );
}

export default Test2;
