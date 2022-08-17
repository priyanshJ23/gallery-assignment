import React from 'react';

import Navbar from './components/Navbar/Navbar';
import {  Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from './components/Home';
import Blogs from './components/Blogs';
import About from './components/About';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }
`;
function App() {
  return (
    <BrowserRouter>
     <Navbar />
     <GlobalStyle/>
    <Routes>
        <Route path='/blogs'  element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/' exact element={<Blogs/>} />
    </Routes>
    </BrowserRouter>
  );
}
  
export default App;