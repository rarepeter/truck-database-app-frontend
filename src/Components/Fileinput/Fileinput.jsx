import axios from 'axios';
import React, { useState } from 'react'
import './Fileinput.css'

export default function Fileinput() {
    const [file, setFile] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('file has been uploaded');
        const response = await axios.post('http://localhost:5000/upload', file)
        console.log(response);
    }

    const getFileInfo = (e) => {
        const formData = new FormData()
        formData.append('image', e.target.files[0])
        console.log(e.target.files[0]);
        setFile(formData);
    }

    return (
        <div className='image-input'>
            <label htmlFor="image">Drag files or click here to upload an image</label>
            <input id="image" name='image' type="file" onChange={e => getFileInfo(e)} />
            <button onClick={e => handleSubmit(e)} type='submit'>Upload</button>
        </div>
    )
}
