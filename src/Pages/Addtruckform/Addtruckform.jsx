import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function AddTruckForm() {
    const [truckName, setTruckName] = useState('')
    const [truckEngine, setTruckEngine] = useState('')
    
    let navigate = useNavigate()

    const handleSetTruckEngine = e => {
        setTruckEngine(e.target.value)
    }

    const handleSetTruckName = e => {
        setTruckName(e.target.value)
    }


    const handleSubmit = async e => {
        e.preventDefault()
        console.log(truckName)
        console.log(truckEngine)

        try {
            const response = await axios.post('http://localhost:5000/addtruck', {truckName, truckEngine})
            const success = response.status === 201

            if (success) navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className="form-wrapper">
        <form>
            <input type="text" onChange={handleSetTruckName}/>
            <input type="text" onChange={handleSetTruckEngine}/>
            <button onClick={handleSubmit}>Submit truck</button>
        </form>
    </div>
  )
}
