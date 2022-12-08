import logo from './logo.svg';
import './App.css';
import {gaEvent} from "./gAnalytics";

function About() {
    const buttonClick = (text) => {
        gaEvent('event', `click ${text}`);
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>About page</p>
                <p><a href="https://github.com/siluk007/siluk007.github.io" target="_blank">Go to github</a></p>
                <div >
                    <button onClick={() => buttonClick('third answer')}>third answer</button>
                    <button onClick={() => buttonClick('fourth answer')}>fourth answer</button>
                </div>
            </header>
        </div>
    );
}

export default About;
