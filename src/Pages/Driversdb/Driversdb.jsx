import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import '../../Styles/Dbpage/Dbpage.css'
import Table from '../../Components/Table/Table'

export default function Driversdb() {

    const [data, setData] = useState([])

    const rows = {
        firstName: "First name",
        lastName: "Last name",
        passportId: "Passport ID"
    }

    const collection = "drivers"

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await axios.get('http://localhost:5000/drivers')
        setData(data.data)
    }
    
    return (
        <>
            <div className="db-wrapper">
                <h1>DRIVERS</h1>
                <Table data={data} rows={rows} collection={collection} />
            </div>
        </>
    )
}
