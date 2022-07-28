import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Addtruckform from './Pages/Addtruckform/Addtruckform'
import Trucksdb from './Pages/Trucksdb/Trucksdb'
import Errorpage from './Pages/Errorpage/Errorpage'
import Truckpage from './Pages/Truckpage/Truckpage';
import AddDriverForm from './Pages/Adddriverform/Adddriverform';
import Driversdb from './Pages/Driversdb/Driversdb';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addtruck" element={<Addtruckform />} />
        <Route path="/adddriver" element={<AddDriverForm />} />
        <Route path="/trucks" element={<Trucksdb />} />
        <Route path="/trucks/:id" element={<Truckpage />} />
        <Route path="/drivers" element={<Driversdb />} />
        {/* <Route path="/drivers/:id" element={<Driverpage />} /> */}
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  );
}

export default App;
