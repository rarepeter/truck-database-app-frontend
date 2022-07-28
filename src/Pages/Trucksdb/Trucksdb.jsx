import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import '../../Styles/Dbpage/Dbpage.css'
import Table from '../../Components/Table/Table'

export default function Trucksdb() {

  const [data, setData] = useState([])

  const rows = {
    licensePlate: "License plate",
    brand: "Brand",
    model: "Model",
    engine: "Engine"
  }

  const collection = "trucks"

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await axios.get('http://localhost:5000/trucks')
    setData(data.data)
  }

  return (
    <>
      <div className="db-wrapper">
        <h1>TRUCKS</h1>
        <Table data={data} rows={rows} collection={collection}/>
      </div>
    </>
  )
}
