import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../../Styles/Form page/Formpage.css'
import Button from '../../Components/Button/Button.jsx'
import Textinput from '../../Components/Textinput/Textinput'
import Fileinput from '../../Components/Fileinput/Fileinput'
import { serverURL } from '../../Config/globalconfig'

export default function AddTruckForm({ collection }) {

    let navigate = useNavigate()

    const [truckBrand, setTruckBrand] = useState('')
    const [truckModel, setTruckModel] = useState('')
    const [truckEngine, setTruckEngine] = useState('')
    const [truckLicensePlate, setTruckLicensePlate] = useState('')
    const [truckColor, setTruckColor] = useState('')

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
            const data = { truckBrand, truckModel, truckEngine, truckLicensePlate, truckColor }
            const response = await axios.post(`${serverURL}/${collection}`, data)
            const success = response.status === 201

            if (file) uploadImage(response.data.id)

            if (success) navigate('/trucks')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="form-page-wrapper">
            <div className="form-wrapper">
                <form>
                    <h1>ADDING TRUCK</h1>
                    <Textinput inputClass='section' id='brand' onChange={e => setTruckBrand(e.target.value)} labelText='Truck brand' validations={{ isNotEmpty: true }} />
                    <Textinput inputClass='section' id='model' onChange={e => setTruckModel(e.target.value)} labelText='Truck model' validations={{ isNotEmpty: true }} />
                    <Textinput inputClass='section' id='engine' onChange={e => setTruckEngine(e.target.value)} labelText='Truck engine' validations={{ isNotEmpty: true }} />
                    <Textinput inputClass='section' id='license-plate' onChange={e => setTruckLicensePlate(e.target.value)} labelText='Truck license plate' validations={{ isNotEmpty: true }} />
                    <Textinput inputClass='section' id='color' onChange={e => setTruckColor(e.target.value)} labelText='Truck color' />

                    <Fileinput onChange={setImage} />

                    <Button onClick={handleSubmit}>SUBMIT</Button>
                </form>
            </div>
        </div>
    )
}
