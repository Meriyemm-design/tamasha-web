import React from 'react';
import './Styles/style.css';
import './Styles/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css'
import Home from './components/Home';
import Header from './components/Header';
import Shows from './components/Shows';
import Comedy from './components/Comedy';
import LiveShows from './components/LiveShows';
import Footer from './components/Footer';
import Sports from './components/Sports';
import Drama from './components/Drama';
import HeroBanner from './components/HeroBanner';
import C__Banner from './components/C__Banner';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Drama />
              <Shows />
              <Comedy />
              <Sports />
              <LiveShows />
            </>
          }
          />
          <Route path="/drama" element={
            <>
              {/* <Drama /> */}
              <HeroBanner />
            </>
          }
          />
          <Route path="/comedy" element={
            <>
              <C__Banner />
            </>
          }
          />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
