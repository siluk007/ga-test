import logo from './logo.svg';
import './App.css';
import {gaEvent} from "./gAnalytics";
import {useState} from "react";

function Main() {
    const [count, setCount] = useState(0)
    const buttonClick = (text) => {
        gaEvent('event', `custom_click`, {page: 'main', button: text});
        setCount(count + 1);
    }
    const randButtonClick = (text) => {
        gaEvent('event', `custom_click`, {page: 'main', button: `rand ${text}`});
        setCount(count + 1);
    }
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    let rand_number = getRandom(0, 100)
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div >
                    <button onClick={() => buttonClick('first answer')}>first answer</button>
                    <button onClick={() => buttonClick('second answer')}>second answer</button>
                    <button onClick={() => randButtonClick(rand_number)}>random {rand_number}</button>
                </div>
            </header>
        </div>
    );
}

export default Main;
