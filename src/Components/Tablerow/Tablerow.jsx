import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Tablerow.css'

export default function Tablerow({ rowdata, collection, rows }) {

  const navigate = useNavigate()

  const keys = Object.keys(rows)

  return (
    <div className='tablerow' onClick={() => navigate(`/${collection}/${rowdata.id}`)}>
      {keys.map(item => {
        return (<div key={item}>{rowdata[item]}</div>)
      })}
    </div>
  )
}
