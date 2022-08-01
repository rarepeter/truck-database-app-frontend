import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../Styles/Dbpage/Dbpage.css'
import Table from '../../Components/Table/Table'
import { useFetch } from '../../Hooks/useFetch'

export default function Deliveriesdb() {

  const [data, setData] = useState([])
  const navigate = useNavigate()

  const tableData = {
    rows: {
      assignedDrivers: "Assigned drivers",
      assignedTrucks: "Assigned trucks",
      startTime: "Start time",
      endTime: "End time"
    },
    collection: "deliveries",
    data,
    rowClickFunction: function (collection, id) {
      navigate(`/${collection}/${id}`)
    }
  }

  const fetchData = async () => {
    const data = await useFetch('http://localhost:5000/deliveries')
    setData(() => data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className="db-wrapper">
        <h1>TRUCKS</h1>
        <Table tableData={tableData} />
      </div>
    </>
  )
}
