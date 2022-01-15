import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Home from './pages/home.js';
import About from './pages/about.js';
import Page from './pages/page.js';
import Login from './pages/login.js';

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
