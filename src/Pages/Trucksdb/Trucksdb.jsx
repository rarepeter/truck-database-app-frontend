import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './Trucksdb.css'
import Truckstable from '../../Components/Truckstable/Truckstable'

export default function Trucksdb() {

  const [data, setData] = useState([])

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
        <Truckstable data={data} />
      </div>
    </>
  )
}
