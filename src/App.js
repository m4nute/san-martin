import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Nabvar'
import Home from './components/Home'
import Trivia from './components/Trivia'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="routes">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/trivia' element={<Trivia />}></Route>
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
