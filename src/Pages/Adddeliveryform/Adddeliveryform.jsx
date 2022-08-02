import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Button from '../../Components/Button/Button.jsx'
import '../../Styles/Form page/Formpage.css'
import Textinput from '../../Components/Textinput/Textinput.jsx'
// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css';

export default function AddDriverForm() {

    const [driver, setDriver] = useState('')
    const [truck, setTruck] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')

    if (startTime > endTime) {
        setEndTime(startTime)
    }

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
                    <Textinput inputClass='section' id='driver' onChange={e => setDriver(e.target.value)} labelText='Driver ID' />
                    <Textinput inputClass='section' id='truck' onChange={e => setTruck(e.target.value)} labelText='Truck ID' />
                    <div className='section'>
                        <label htmlFor="start-time">Start time</label>
                        <input type="date" min="2022-08-02" id="start-time" onChange={e => setStartTime(e.target.value)} />
                    </div>
                    <div className='section'>
                        <label htmlFor="end-time">End time</label>
                        <input type="date" id="end-time" onChange={e => setEndTime(e.target.value)} />
                    </div>

                    <Button onClick={handleSubmit}>SUBMIT</Button>
                </form>
            </div>
        </div>
    )
}
