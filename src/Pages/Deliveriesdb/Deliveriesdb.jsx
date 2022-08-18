import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../Styles/Dbpage/Dbpage.css'
import Table from '../../Components/Table/Table'
import { useFetch } from '../../Hooks/useFetch'
import Button from '../../Components/Button/Button'
import { serverURL } from '../../Config/globalconfig'
import Selectdropdown from '../../Components/Selectdropdown/Selectdropdown'

export default function Deliveriesdb({ collection }) {

  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [selectedSort, setSelectedSort] = useState('')

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

  const sortOptions = [
    {
      value: 'startTime',
      name: 'Start time'
    },
    {
      value: 'endTime',
      name: 'End time'
    }
  ]

  const sortItems = (sort) => {
    setSelectedSort(() => sort)
    setData([...data].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  useEffect(() => {
    (async () => {
      const deliveryData = await useFetch(`${serverURL}/${collection}`)
      const fetchedDriverData = await useFetch(`${serverURL}/drivers`)
      const fetchedTruckData = await useFetch(`${serverURL}/trucks`)
      let newDataArray = deliveryData.map((delivery) => {
        const foundDriver = fetchedDriverData.find(driver => driver.id === delivery.assignedDrivers)
        delivery.assignedDrivers = `${foundDriver.firstName} ${foundDriver.lastName} | ${foundDriver.passportId}`
        return delivery
      })
      newDataArray = newDataArray.map((delivery) => {
        const foundTruck = fetchedTruckData.find(truck => truck.id === delivery.assignedTrucks)
        delivery.assignedTrucks = `${foundTruck.licensePlate}`
        return delivery
      })
      newDataArray = newDataArray.map((delivery) => {
        const start = new Date(delivery.startTime)
        const end = new Date(delivery.endTime)
        let date = start.toLocaleDateString('en-GB', { year: "numeric", month: "2-digit", day: "2-digit" })
        let time = start.toLocaleTimeString('en-GB', { timeStyle: "short" })
        delivery.startTime = `${date} | ${time}`
        date = end.toLocaleDateString('en-GB', { year: "numeric", month: "2-digit", day: "2-digit" })
        time = end.toLocaleTimeString('en-GB', { timeStyle: "short" })
        delivery.endTime = `${date} | ${time}`
        return delivery
      })
      setData(() => newDataArray)
    })()
  }, [])

  return (
    <>
      <div className="db-wrapper">
        <h1>DELIVERIES</h1>
        <Button onClick={() => navigate('/adddelivery')}>Register a delivery</Button>
        <Selectdropdown defaultValue='Sort by:' sortOptions={sortOptions} value={selectedSort} onChange={sortItems} />
        <Table tableData={tableData} />
      </div>
    </>
  )
}
