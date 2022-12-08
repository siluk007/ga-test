import './App.css';
import Main from "./Main";
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import About from "./About";
import Analytics from "./Analytics"

function App() {
    console.log('render app')
  return (
      <Router>
          <Analytics/>
        <div>
          <nav>
            <Link to={"/"} >Main</Link>
            <Link to={"/about"} >About</Link>
          </nav>
          <Routes>
            <Route exact path="/" element={<Main/>}/>
            <Route exact path="/about" element={<About/>}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
