import './App.css';
import Main from "./Main";
import {Route, Routes, Link} from 'react-router-dom'
import About from "./About";
import Analytics from "./Analytics"

function App() {
  return (
      <div>
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
      </div>
  );
}

export default App;
