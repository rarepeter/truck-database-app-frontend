import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Addtruckform.css'
import Button from '../../Components/Button/Button.jsx'

export default function AddTruckForm() {

    const [truckBrand, setTruckBrand] = useState('')
    const [truckModel, setTruckModel] = useState('')
    const [truckEngine, setTruckEngine] = useState('')
    const [truckLicensePlate, setTruckLicensePlate] = useState('')
    const [truckColor, setTruckColor] = useState('')

    let navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()

        try {
            const data = { truckBrand, truckModel, truckEngine, truckLicensePlate, truckColor }
            const response = await axios.post('http://localhost:5000/trucks', data)
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
                    <h1>ADDING TRUCK</h1>
                    <div>
                        <label htmlFor="truck-brand">Truck brand</label>
                        <input type="text" id="truck-brand" onChange={e => setTruckBrand(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="truck-model">Truck model</label>
                        <input type="text" id="truck-model" onChange={e => setTruckModel(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="truck-engine">Truck engine</label>
                        <input type="text" id="trucke-engine" onChange={e => setTruckEngine(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="truck-license-plate">Truck license plate</label>
                        <input type="text" id="truck-license-plate" onChange={e => setTruckLicensePlate(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="truck-color">Truck color</label>
                        <input type="text" id="truck-color" onChange={e => setTruckColor(e.target.value)} />
                    </div>

                    <Button onClick={handleSubmit}>
                        SUBMIT
                    </Button>
                </form>
            </div>
        </div>
    )
}
