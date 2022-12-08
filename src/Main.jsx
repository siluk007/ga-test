import logo from './logo.svg';
import './App.css';

function Main() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div >
                    <button>first answer</button>
                    <button>second answer</button>
                </div>
            </header>
        </div>
    );
}

export default Main;
