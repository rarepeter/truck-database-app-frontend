import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './Deliverypage.css'

export default function Deliverypage() {
    const { id } = useParams()

    const [delivery, setDelivery] = useState({})

    const fetchData = async () => {
        const delivery = await axios.get(`http://localhost:5000/deliveries/${id}`)
        setDelivery(delivery.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='delivery-card'>
            <div className="delivery-card__primary-info">
                <div>
                    <div className="title">Driver ID:</div>
                    <div className="desc">{delivery.assignedDrivers}</div>
                </div>
                <div>
                    <div className="title">Truck ID:</div>
                    <div className="desc">{delivery.assignedTrucks}</div>
                </div>
            </div>

            <div className="delivery-card__secondary-info">
                <div>
                    <div className="title">Start time:</div>
                    <div className="desc">{delivery.startTime}</div>
                </div>
                <div>
                    <div className="title">End time:</div>
                    <div className="desc">{delivery.endTime}</div>
                </div>
            </div>
        </div>
    )
}
