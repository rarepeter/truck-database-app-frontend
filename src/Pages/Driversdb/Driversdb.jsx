import React, { useEffect } from 'react'
import { useState } from 'react'
import '../../Styles/Dbpage/Dbpage.css'
import Table from '../../Components/Table/Table'
import { useFetch } from '../../Hooks/useFetch'
import { useNavigate } from 'react-router-dom'

export default function Driversdb() {

    const [data, setData] = useState([])
    const navigate = useNavigate()

    const rows = {
        firstName: "First name",
        lastName: "Last name",
        passportId: "Passport ID"
    }

    const tableData = {
        rows: { ...rows },
        collection: "drivers",
        data,
        clickFunction: function (collection, id) {
            navigate(`/${collection}/${id}`)
        }
    }

    const fetchData = async () => {
        const data = await useFetch('http://localhost:5000/drivers')
        setData(() => data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className="db-wrapper">
                <h1>DRIVERS</h1>
                <Table tableData={tableData} />
            </div>
        </>
    )
}
