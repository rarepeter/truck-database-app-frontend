import React from 'react'
import './Descriptionrow.css'

export default function Descriptionrow({ rows }) {

    const keys = Object.keys(rows)

    return (
        <div className='tablerow top'>
            {keys.map(val => {
                return (<div key={val}>{rows[val]}</div>)
            })}
        </div>
    )
}
