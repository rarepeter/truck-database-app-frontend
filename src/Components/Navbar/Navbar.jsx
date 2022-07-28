import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {

  const navigate = useNavigate()

  return (
    <div className="navbar">
      <div className="nav">
        <div className="nav__logo" onClick={() => navigate('/')}></div>
        <div className="nav__links">
          <Link to="/">
            <li className='primary' href="">Home</li>
          </Link>
          <Link to="/trucks">
            <li href="">Trucks</li>
          </Link>
          <Link to="/drivers">
            <li href="">Drivers</li>
          </Link>
          <Link to="/deliveries">
            <li href="">Deliveries</li>
          </Link>
        </div>
      </div>
    </div>
  )
}
