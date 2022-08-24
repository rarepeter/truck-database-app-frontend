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
import Login from './Pages/Login/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Home />} />

        <Route path="/addtruck" element={<Addtruckform collection='trucks' />} />
        <Route path="/adddriver" element={<AddDriverForm collection='drivers' />} />
        <Route path="/adddelivery" element={<Adddeliveryform collection='deliveries' />} />

        <Route path="/trucks" element={<Trucksdb collection='trucks' />} />
        <Route path="/drivers" element={<Driversdb collection='drivers' />} />
        <Route path="/deliveries" element={<Deliveriesdb collection='deliveries' />} />

        <Route path="/trucks/:id" element={<Truckpage collection='trucks' />} />
        <Route path="/drivers/:id" element={<Driverpage collection='drivers' />} />
        <Route path="/deliveries/:id" element={<Deliverypage collection='deliveries' />} />

        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  );
}

export default App;
