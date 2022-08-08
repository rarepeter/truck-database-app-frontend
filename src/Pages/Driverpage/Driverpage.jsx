import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Driverpage.css'
import { useFetch } from '../../Hooks/useFetch'
import { serverURL } from '../../Config/globalconfig'

export default function Driverpage({ collection }) {
    const { id } = useParams()

    const [driver, setDriver] = useState({})

    useEffect(() => {
        (async () => {
            const driverData = await useFetch(`${serverURL}/${collection}/${id}`)
            setDriver(driverData)
        })()
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
