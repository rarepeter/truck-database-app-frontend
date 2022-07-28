import React from 'react'
import './Button.css'

export default function Button(props) {

  return (
    <button className='btn' onClick={(e) => props.onClick(e)}>
      {props.children}
    </button>
  )
}
