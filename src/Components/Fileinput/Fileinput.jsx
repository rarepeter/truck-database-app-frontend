import React from 'react'
import './Fileinput.css'

export default function Fileinput({ onChange }) {

    return (
        <div className='image-input'>
            <label htmlFor="image">Drag files or click here to upload an image</label>
            <input id="image" name='image' type="file" onChange={e => onChange(e)} />
        </div>
    )
}
