import logo from './logo.svg';
import './App.css';

function About() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>About page</p>
                <p><a href="https://github.com/siluk007/siluk007.github.io" target="_blank">Go to github</a></p>
            </header>
        </div>
    );
}

export default About;
