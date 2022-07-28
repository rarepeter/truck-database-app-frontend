import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './Driverpage.css'

export default function Driverpage() {
    const { id } = useParams()

    const [driver, setDriver] = useState({})

    const fetchData = async () => {
        const driver = await axios.get(`http://localhost:5000/drivers/${id}`)
        setDriver(driver.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='driver-card'>
            <div className="driver-card__primary-info">
                <div>
                    <div className="title">First name:</div>
                    <div className="desc">{driver.firstName}</div>
                </div>
                <div>
                    <div className="title">ID:</div>
                    <div className="desc">{driver.id}</div>
                </div>
            </div>

            <div className="driver-card__secondary-info">
                <div>
                    <div className="title">Last name:</div>
                    <div className="desc">{driver.lastName}</div>
                </div>
            </div>
        </div>
    )
}
