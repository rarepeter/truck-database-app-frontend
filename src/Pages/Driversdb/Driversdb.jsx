import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../Styles/Dbpage/Dbpage.css'
import Table from '../../Components/Table/Table'
import { useFetch } from '../../Hooks/useFetch'
import Button from '../../Components/Button/Button'
import { serverURL } from '../../Config/globalconfig'

export default function Driversdb({ collection }) {

    const navigate = useNavigate()
    const [data, setData] = useState([])

    const tableData = {
        rows: {
            firstName: "First name",
            lastName: "Last name",
            passportId: "Passport ID"
        },
        collection,
        data,
        rowClickFunction: function (collection, id) {
            navigate(`/${collection}/${id}`)
        }
    }

    useEffect(() => {
        (async () => {
            const driverData = await useFetch(`${serverURL}/${collection}`)
            setData(driverData)
        })()
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
