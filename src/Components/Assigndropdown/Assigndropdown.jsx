import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { serverURL } from '../../Config/globalconfig'
import { useFetch } from '../../Hooks/useFetch'
import Button from '../Button/Button'
import './Assigndropdown.css'

export default function Assigndropdown({ truck }) {

    const [isActive, setIsActive] = useState(false)
    const [activeDriver, setActiveDriver] = useState({})
    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            const driverData = await useFetch(`${serverURL}/drivers`)
            setData(driverData)
        })()
    }, [])

    const assignDriver = async () => {
        const newTruckData = { ...truck, activeDrivers: activeDriver.id }
        await axios.put(`${serverURL}/trucks`, newTruckData)
        setActiveDriver({})
        console.log("Driver has been asigned!")
        window.location.reload()
    }

    return (
        <>
            <div className='select-item'>
                <div className="selected-item" onClick={() => setIsActive(!isActive)}>
                    {Object.keys(activeDriver).length === 0 ? "Select driver" : `${activeDriver.firstName} ${activeDriver.lastName}`}
                </div>
                {isActive && (<div className="select-list">
                    {data.map(item => {
                        return (<div key={item.id} onClick={() => {setActiveDriver(item)}}>{item.firstName} {item.lastName}</div>)
                    })}
                </div>)}
            </div>
            <Button disabled={Object.keys(activeDriver).length === 0} onClick={() => assignDriver()}>Assign driver</Button>
        </>
    )
}
