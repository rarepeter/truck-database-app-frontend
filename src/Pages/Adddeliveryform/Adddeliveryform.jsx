import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../../Styles/Form page/Formpage.css'
import Button from '../../Components/Button/Button.jsx'

export default function AddDriverForm() {

    const [driver, setDriver] = useState('')
    const [truck, setTruck] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')

    let navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()

        try {
            const data = { driver, truck, startTime, endTime }
            console.log(data)
            const response = await axios.post('http://localhost:5000/deliveries', data)
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
                    <h1>ADDING DRIVER</h1>
                    <div>
                        <label htmlFor="driver">Driver ID</label>
                        <input type="text" id="driver" onChange={e => setDriver(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="truck">Truck</label>
                        <input type="text" id="truck" onChange={e => setTruck(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="start-time">Start time</label>
                        <input type="text" id="start-time" onChange={e => setStartTime(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="end-time">End time</label>
                        <input type="text" id="end-time" onChange={e => setEndTime(e.target.value)} />
                    </div>

                    <Button onClick={handleSubmit}>
                        SUBMIT
                    </Button>
                </form>
            </div>
        </div>
    )
}
