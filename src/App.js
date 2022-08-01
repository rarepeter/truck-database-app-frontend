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
import Driverpage from './Pages/Driverpage/Driverpage';
import Deliverypage from './Pages/Deliverypage/Deliverypage';
import Adddeliveryform from './Pages/Adddeliveryform/Adddeliveryform'
import Deliveriesdb from './Pages/Deliveriesdb/Deliveriesdb';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/addtruck" element={<Addtruckform />} />
        <Route path="/adddriver" element={<AddDriverForm />} />
        <Route path="/adddelivery" element={<Adddeliveryform />} />

        <Route path="/trucks" element={<Trucksdb />} />
        <Route path="/drivers" element={<Driversdb />} />
        <Route path="/deliveries" element={<Deliveriesdb />} />

        <Route path="/trucks/:id" element={<Truckpage />} />
        <Route path="/drivers/:id" element={<Driverpage />} />
        <Route path="/deliveries/:id" element={<Deliverypage />} />

        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  );
}

export default App;
