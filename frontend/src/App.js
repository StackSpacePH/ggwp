import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header.js';
import Home from './components/home.js';
import About from './components/about.js';
import Page from './components/page.js';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/:userslug' element={<Page />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
