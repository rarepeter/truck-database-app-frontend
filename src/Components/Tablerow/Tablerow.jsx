import React from 'react'
import './Tablerow.css'

export default function Tablerow({ rowdata, collection, rows, rowClickFunction }) {

  const keys = Object.keys(rows)

  return (
    <div className='tablerow' onClick={() => rowClickFunction(collection, rowdata.id)}>
      {keys.map(item => {
        return (<div key={item}>{rowdata[item]}</div>)
      })}
    </div>
  )
}
