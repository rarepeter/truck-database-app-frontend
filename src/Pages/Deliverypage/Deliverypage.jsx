import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../../Hooks/useFetch'
import { serverURL } from '../../Config/globalconfig'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './Deliverypage.css'

export default function Deliverypage({ collection }) {
    const { id } = useParams()

    const [delivery, setDelivery] = useState({})
    const [selectionRange, setSelectionRange] = useState({})

    useEffect(() => {
        (async () => {
            let deliveryData = await useFetch(`${serverURL}/${collection}/${id}`)
            const assignedDriver = await useFetch(`${serverURL}/drivers/${deliveryData.assignedDrivers}`)
            const assignedTruck = await useFetch(`${serverURL}/trucks/${deliveryData.assignedTrucks}`)
            deliveryData.assignedDrivers = `${assignedDriver.firstName} ${assignedDriver.lastName}`
            deliveryData.assignedDriversPassportId = assignedDriver.passportId
            deliveryData.assignedDriversId = assignedDriver.id
            deliveryData.assignedTrucks = `${assignedTruck.color} ${assignedTruck.brand} ${assignedTruck.model}`
            deliveryData.assignedTrucksLicensePlate = assignedTruck.licensePlate
            deliveryData.assignedTrucksId = assignedTruck.id
            setSelectionRange(() => {
                return {
                    startDate: new Date(deliveryData.startTime),
                    endDate: new Date(deliveryData.endTime),
                    key: 'selection'
                }
            })

            deliveryData.startTime = new Date(deliveryData.startTime).toLocaleString('en-GB').slice(0, -3)
            deliveryData.endTime = new Date(deliveryData.endTime).toLocaleString('en-GB').slice(0, -3)

            setDelivery(deliveryData)
        })()
    }, [])

    return (
        <div className='delivery-card'>
            <div className="delivery-card__primary-info">
                <div>
                    <div className="title">Driver:</div>
                    <div className="desc"><Link to={`/drivers/${delivery.assignedDriversId}`}>{delivery.assignedDrivers}</Link></div>
                </div>
                <div>
                    <div className="title">Truck:</div>
                    <div className="desc"><Link to={`/trucks/${delivery.assignedTrucksId}`}>{delivery.assignedTrucks}</Link></div>
                </div>
                <div>
                    <div className="title">Driver passport ID:</div>
                    <div className="desc">{delivery.assignedDriversPassportId}</div>
                </div>
                <div>
                    <div className="title">Truck license plate:</div>
                    <div className="desc">{delivery.assignedTrucksLicensePlate}</div>
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
            {delivery && <DateRangePicker
                ranges={[selectionRange]}
                onChange={() => { }}
            />}
        </div>
    )
}
