import './App.css';
import Main from './Main';
import { Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import About from './About';
import Analytics from './Analytics';
import Test from './Test';
import Test2 from './Test2';
import Test3 from './Test3';
import HeadwayWidget from './HeadwayWidget';

function App () {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [navigate]
  );

  return (
      <div>
          <Analytics/>
        <div>
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly'
          }}>
            <Link to={'/'} >Main</Link>
            <Link to={'/about'} >About</Link>
            <Link to={'/test'} >Test</Link>
            <Link to={'/test2'} >Test2</Link>
            <Link to={'/test3'} >Test3</Link>
          </nav>
          <HeadwayWidget/>
          <Routes>
            <Route exact path="/" element={<Main/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/test" element={<Test/>}/>
            <Route exact path="/test2" element={<Test2/>}/>
            <Route exact path="/test3" element={<Test3/>}/>
            <Route path={'*'} element={<Navigate replace to="/" />}/>
          </Routes>
        </div>
      </div>
  );
}

export default App;
