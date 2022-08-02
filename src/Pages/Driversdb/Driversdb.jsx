import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../Styles/Dbpage/Dbpage.css'
import Table from '../../Components/Table/Table'
import { useFetch } from '../../Hooks/useFetch'
import Button from '../../Components/Button/Button'

export default function Driversdb() {

    const [data, setData] = useState([])
    const navigate = useNavigate()

    const tableData = {
        rows: {
            firstName: "First name",
            lastName: "Last name",
            passportId: "Passport ID"
        },
        collection: "drivers",
        data,
        rowClickFunction: function (collection, id) {
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
                <Button onClick={() => navigate('/adddriver')}>Add a driver</Button>
                <Table tableData={tableData} />
            </div>
        </>
    )
}
