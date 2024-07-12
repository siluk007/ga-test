import logo from './logo.svg';
import './App.css';
// import { gaEvent } from './gAnalytics';
import { useEffect } from 'react';

function Main () {
  // const buttonClick = (text) => {
  //   gaEvent('event', 'dateFilter', {
  //     action: 'click',
  //     label: 'AllTime',
  //     value: 'AllTime'
  //   });
  // };
  // const randButtonClick = (text) => {
  //   gaEvent('event',
  //     'openPopup',
  //     { action: 'click', label: 'Average TKL', value: 'Average TKL' });
  // };
  // function getRandom (min, max) {
  //   return Math.floor(Math.random() * (max - min) + min);
  // }
  // const randNumber = getRandom(0, 100);
  useEffect(() => {
    document.title = 'Main';
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
         <button><div><div><div></div></div></div></button>
        </div>
      </header>
    </div>
  );
}

export default Main;
