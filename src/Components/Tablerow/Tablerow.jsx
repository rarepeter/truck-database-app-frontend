import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Tablerow.css'

export default function Tablerow({ rowdata }) {

  const navigate = useNavigate()

  return (
    <div className='tablerow' onClick={() => navigate(`/trucks/${rowdata.id}`)}>
      <div className="id">{rowdata.licensePlate}</div>
      <div className="brand">{rowdata.brand}</div>
      <div className="model">{rowdata.model}</div>
      <div className="engine">{rowdata.engine}</div>
    </div>
  )
}
