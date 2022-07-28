import React, { useState } from 'react'
import axios from 'axios'
import './Adddriverform.css'
import { useNavigate } from 'react-router-dom'
import Button from '../../Components/Button/Button.jsx'

export default function AddDriverForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [passportId, setPassportId] = useState('')

    let navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()

        try {
            const data = { firstName, lastName, passportId }
            console.log(data)
            const response = await axios.post('http://localhost:5000/drivers', data)
            const success = response.status === 201

            if (success) navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="form-page-wrapper">
            <div className="form-wrapper">
                <form>
                    <label htmlFor="first-name">First name:</label>
                    <input type="text" id="first-name" onChange={e => setFirstName(e.target.value)} />
                    <label htmlFor="last-name">Last name:</label>
                    <input type="text" id="last-name" onChange={e => setLastName(e.target.value)} />
                    <label htmlFor="passport-id">Passport ID:</label>
                    <input type="text" id="passport-id" onChange={e => setPassportId(e.target.value)} />

                    <Button onClick={handleSubmit}>
                        SUBMIT
                    </Button>
                </form>
            </div>
        </div>
    )
}
