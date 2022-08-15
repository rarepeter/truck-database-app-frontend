import React, { useEffect } from 'react'
import { useState } from 'react'
import { serverURL } from '../../Config/globalconfig'
import { useFetch } from '../../Hooks/useFetch'
import './Assigndropdown.css'

export default function Assigndropdown({ truckId }) {

    const [isActive, setIsActive] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            const driverData = await useFetch(`${serverURL}/drivers`)
            setData(driverData)
        })()
    }, [])

    const assignDriver = (driverId, truckId) => {
        setIsActive(!isActive)
    }

    console.log(data)

    return (
        <div className='select-item'>
            <div className="selected-item" onClick={() => setIsActive(!isActive)}>Select driver</div>
            {isActive && (<div className="select-list">
                {data.map(item => {
                    return (<div key={item.id} onClick={() => assignDriver(item.id, truckId)}>{item.firstName} {item.lastName}</div>)
                })}
            </div>)}
        </div>
    )
}
