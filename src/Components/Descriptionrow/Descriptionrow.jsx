import React from 'react'
import './Descriptionrow.css'

export default function Descriptionrow({ rows }) {
    return (
        <div className='tablerow top'>
            {rows.map(item => {
                return (<div className={item.toLowerCase()}>{item}</div>)
            })}
        </div>
    )
}
