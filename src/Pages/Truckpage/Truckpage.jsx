import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './Truckpage.css'

export default function Truckpage() {
    const { id } = useParams()

    const [truck, setTruck] = useState({})

    const fetchData = async () => {
        const truck = await axios.get(`http://localhost:5000/trucks/${id}`)
        setTruck(truck.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='truck-card'>
            <div className="truck-card__primary-info">
                <div>
                    <div className="title">License plate:</div>
                    <div className="desc">{truck.licensePlate}</div>
                </div>
                <div>
                    <div className="title">ID:</div>
                    <div className="desc">{truck.id}</div>
                </div>
                <div>
                    <div className="title">Brand:</div>
                    <div className="desc">{truck.brand}</div>
                </div>
                <div>
                    <div className="title">Model:</div>
                    <div className="desc">{truck.model}</div>
                </div>
            </div>

            <div className="truck-card__secondary-info">
                <div>
                    <div className="title">Color:</div>
                    <div className="desc">{truck.color}</div>
                </div>
                <div>
                    <div className="title">Engine:</div>
                    <div className="desc">{truck.engine}</div>
                </div>
            </div>
        </div>
    )
}
