import React from 'react';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Addtruckform from './Pages/Addtruckform/Addtruckform'
import Trucksdb from './Pages/Trucksdb/Trucksdb'
import Errorpage from './Pages/Errorpage/Errorpage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addtruck" element={<Addtruckform />} />
          <Route path="/trucks" element={<Trucksdb />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </Router>
  );
}

export default App;
