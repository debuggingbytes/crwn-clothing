import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div><h1>HI</h1></div>
)

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/shop/*" element={ <HatsPage /> } />
      </Routes>
    </div>
  );
}

export default App;
