import logo from './logo.svg';
import './App.css';
import {gaEvent} from "./gAnalytics";
import {useState, useEffect} from "react";

function Test3() {
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
    let rand_number = getRandom(0, 100);
    useEffect(() => {
        document.title = 'Test3';
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <div >
                    <button onClick={() => buttonClick('9 answer')}>first answer</button>
                    <button onClick={() => buttonClick('10 answer')}>second answer</button>
                    <button onClick={() => randButtonClick(rand_number)}>random {rand_number}</button>
                </div>
            </header>
        </div>

    );
}

export default Test3;
