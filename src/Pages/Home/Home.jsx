import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

export default function Home() {

  const navigate = useNavigate()

  return (
    <div className='menu-card'>
      <div className="menu-card__profile-pic"></div>
      <div className="menu-card__desc">MENU</div>
      <div className="menu-card__buttons">
        <div className="menu-btn" onClick={() => navigate(`/addtruck`)}>Add a truck</div>
        <div className="menu-btn" onClick={() => navigate(`/adddriver`)}>Add a driver</div>
        <div className="menu-btn" onClick={() => navigate(`/adddelivery`)}>Register a delivery</div>
      </div>
    </div>
  )
}
