import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../../Styles/Form page/Formpage.css'
import Button from '../../Components/Button/Button.jsx'
import Textinput from '../../Components/Textinput/Textinput'
import { serverURL } from '../../Config/globalconfig'
import Fileinput from '../../Components/Fileinput/Fileinput'

export default function AddDriverForm({ collection }) {

    let navigate = useNavigate()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [passportId, setPassportId] = useState('')

    const [file, setFile] = useState(null)

    const setImage = (e) => {
        const formData = new FormData()
        formData.append('image', e.target.files[0])
        setFile(formData);
    }

    const uploadImage = async (id) => {
        file.append('id', id)
        await axios.post(`${serverURL}/upload-avatar`, file)
    }

    const handleSubmit = async e => {
        e.preventDefault()

        try {
            const data = { firstName, lastName, passportId }
            const response = await axios.post(`${serverURL}/${collection}`, data)
            const success = response.status === 201

            if (file) uploadImage(response.data.id)

            if (success) navigate('/drivers')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="form-page-wrapper">
            <div className="form-wrapper">
                <form>
                    <h1>ADDING DRIVER</h1>
                    <Textinput inputClass='section' id='first-name' onChange={e => setFirstName(e.target.value)} labelText='First name' />
                    <Textinput inputClass='section' id='last-name' onChange={e => setLastName(e.target.value)} labelText='Last name' />
                    <Textinput inputClass='section' id='passport-id' onChange={e => setPassportId(e.target.value)} labelText='Passport ID' />

                    <Fileinput onChange={setImage} />

                    <Button onClick={handleSubmit}>SUBMIT</Button>
                </form>
            </div>
        </div>
    )
}
