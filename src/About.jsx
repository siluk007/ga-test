import logo from './logo.svg';
import './App.css';
import gAnalytics from "./gAnalytics";

function About() {
    const buttonClick = (text) => {
        gAnalytics.gaEvent("Study", "get Answer");
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>About page</p>
                <p><a href="https://github.com/siluk007/siluk007.github.io" target="_blank">Go to github</a></p>
                <div >
                    <button onClick={() => buttonClick('first answer')}>first answer</button>
                    <button onClick={() => buttonClick('second answer')}>second answer</button>
                </div>
            </header>
        </div>
    );
}

export default About;
