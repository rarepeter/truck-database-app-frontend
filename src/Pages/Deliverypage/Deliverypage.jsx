import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Deliverypage.css'
import { useFetch } from '../../Hooks/useFetch'
import { serverURL } from '../../Config/globalconfig'

export default function Deliverypage({ collection }) {
    const { id } = useParams()

    const [delivery, setDelivery] = useState({})

    useEffect(() => {
        (async () => {
            const deliveryData = await useFetch(`${serverURL}/${collection}/${id}`)
            setDelivery(deliveryData)
        })()
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
