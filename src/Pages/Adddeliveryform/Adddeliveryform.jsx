import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Button from '../../Components/Button/Button.jsx'
import '../../Styles/Form page/Formpage.css'
import Textinput from '../../Components/Textinput/Textinput.jsx'
import Timeinput from '../../Components/Timeinput/Timeinput.jsx'

export default function Adddeliveryform() {
    let navigate = useNavigate()

    const [driver, setDriver] = useState('')
    const [truck, setTruck] = useState('')
    const [startTime, setStartTime] = useState(new Date())
    const [endTime, setEndTime] = useState('')

    console.log(startTime);

    const today = new Date().toISOString().slice(0, 10)
    const minEndDate = startTime.toISOString().slice(0, 10)

    const handleSubmit = async e => {
        e.preventDefault()

        try {
            const data = { driver, truck, startTime, endTime }
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
                    <h1>REGISTRING DELIVERY</h1>
                    <Textinput inputClass='section' id='driver' onChange={e => setDriver(e.target.value)} labelText='Driver ID' />
                    <Textinput inputClass='section' id='truck' onChange={e => setTruck(e.target.value)} labelText='Truck ID' />

                    <Timeinput minDate={today} divClass='section' id='start-time' onChange={setStartTime} labelText='Delivery start time' />
                    <Timeinput minDate={minEndDate} divClass='section' id='end-time' onChange={setEndTime} labelText='Delivery end time' />

                    <Button onClick={handleSubmit}>SUBMIT</Button>
                </form>
            </div>
        </div>
    )
}
