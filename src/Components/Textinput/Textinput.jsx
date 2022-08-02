import React from 'react'

export default function Textinput({ inputClass, id, onChange, labelText }) {
    return (
        <div className={inputClass}>
            {labelText !== undefined && <label htmlFor={id}>{labelText}</label>}
            <input type="text" placeholder={labelText} id={id} onChange={(e) => onChange(e)} />
        </div>
    )
}
