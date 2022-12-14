import './App.css';
import Main from "./Main";
import {Route, Routes, Link} from 'react-router-dom'
import About from "./About";
import Analytics from "./Analytics"
import Test from "./Test";

function App() {
  return (
      <div>
          <Analytics/>
        <div>
          <nav style={{ display: 'flex',
              width: '15%',
              alignItems: 'center',
              justifyContent: 'space-between'
          }}>
            <Link to={"/"} >Main</Link>
            <Link to={"/about"} >About</Link>
            <Link to={"/test"} >Test</Link>
          </nav>
          <Routes>
            <Route exact path="/" element={<Main/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/test" element={<Test/>}/>
          </Routes>
        </div>
      </div>
  );
}

export default App;
