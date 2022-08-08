import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../Styles/Dbpage/Dbpage.css'
import Table from '../../Components/Table/Table'
import { useFetch } from '../../Hooks/useFetch'
import Button from '../../Components/Button/Button'
import { serverURL } from '../../Config/globalconfig'

export default function Deliveriesdb({ collection }) {

  const navigate = useNavigate()
  const [data, setData] = useState([])

  const tableData = {
    rows: {
      assignedDrivers: "Assigned drivers",
      assignedTrucks: "Assigned trucks",
      startTime: "Start time",
      endTime: "End time"
    },
    collection,
    data,
    rowClickFunction: function (collection, id) {
      navigate(`/${collection}/${id}`)
    }
  }

  useEffect(() => {
    (async () => {
      const deliveryData = await useFetch(`${serverURL}/${collection}`)
      setData(deliveryData)
    })()
  }, [])

  return (
    <>
      <div className="db-wrapper">
        <h1>DELIVERIES</h1>
        <Button onClick={() => navigate('/adddelivery')}>Register a delivery</Button>
        <Table tableData={tableData} />
      </div>
    </>
  )
}
