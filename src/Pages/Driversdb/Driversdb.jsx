import React, { useEffect, useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../Styles/Dbpage/Dbpage.css'
import Table from '../../Components/Table/Table'
import { useFetch } from '../../Hooks/useFetch'
import Button from '../../Components/Button/Button'
import { serverURL } from '../../Config/globalconfig'
import Selectdropdown from '../../Components/Selectdropdown/Selectdropdown'

export default function Driversdb({ collection }) {

    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [selectedSort, setSelectedSort] = useState('')

    const sortItems = (sort) => {
        setSelectedSort(() => sort)
        setData([...data].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    const [searchQuery, setSearchQuery] = useState('')

    const sortedData = useMemo(() => {
        if (selectedSort) {
            return [...data].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return data
    }, [selectedSort, data])

    const sortedAndQueriedData = useMemo(() => {
        return sortedData.filter(item => {
            return (item.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.passportId.toLowerCase().includes(searchQuery.toLowerCase()))
        })
    }, [searchQuery, sortedData])

    const tableData = {
        rows: {
            firstName: "First name",
            lastName: "Last name",
            passportId: "Passport ID"
        },
        collection,
        data: sortedAndQueriedData,
        rowClickFunction: function (collection, id) {
            navigate(`/${collection}/${id}`)
        }
    }

    const sortOptions = [
        {
            value: 'firstName',
            name: 'First name'
        },
        {
            value: 'lastName',
            name: 'Last name'
        }
    ]


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
                <Selectdropdown defaultValue='Sort by:' sortOptions={sortOptions} value={selectedSort} onChange={sortItems} />
                <input type="text" placeholder='Search...' value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                <Table tableData={tableData} />
            </div>
        </>
    )
}
