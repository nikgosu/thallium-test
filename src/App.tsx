import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import About from "./components/pages/About";
import ErrorPage from "./components/pages/ErrorPage";
import Home from "./components/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/about'} element={<About/>}/>
        <Route path={'/*'} element={<ErrorPage error={'Ooops 404 page not found'}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
