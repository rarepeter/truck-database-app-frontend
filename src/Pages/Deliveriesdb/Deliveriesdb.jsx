import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFetch } from '../../Hooks/useFetch'
import { serverURL } from '../../Config/globalconfig'
import Table from '../../Components/Table/Table'
import Button from '../../Components/Button/Button'
import Selectdropdown from '../../Components/Selectdropdown/Selectdropdown'
import '../../Styles/Dbpage/Dbpage.css'

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
        const foundTruck = fetchedTruckData.find(truck => truck.id === delivery.assignedTrucks)
        delivery.assignedDrivers = `${foundDriver.firstName} ${foundDriver.lastName} | ${foundDriver.passportId}`
        delivery.assignedTrucks = `${foundTruck.licensePlate}`
        delivery.startTime = new Date(delivery.startTime).toLocaleString('en-GB').slice(0, -3)
        delivery.endTime = new Date(delivery.endTime).toLocaleString('en-GB').slice(0, -3)
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
