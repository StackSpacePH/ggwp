import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Home from './components/home.js';
import About from './components/about.js';
import Page from './components/page.js';
import Login from './components/login.js';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/:userslug' element={<Page />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
