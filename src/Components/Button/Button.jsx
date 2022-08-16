import React from 'react'
import './Button.css'

export default function Button(props) {

  return (
    <button disabled={props.disabled ? props.disabled : false} className='btn' onClick={(e) => props.onClick(e)}>
      {props.children}
    </button>
  )
}
