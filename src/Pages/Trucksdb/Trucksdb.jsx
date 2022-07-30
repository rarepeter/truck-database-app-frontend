import React, { useEffect } from 'react'
import { useState } from 'react'
import '../../Styles/Dbpage/Dbpage.css'
import Table from '../../Components/Table/Table'
import { useFetch } from '../../Hooks/useFetch'
import { useNavigate } from 'react-router-dom'

export default function Trucksdb() {

  const [data, setData] = useState([])
  const navigate = useNavigate()

  const rows = {
    licensePlate: "License plate",
    brand: "Brand",
    model: "Model",
    engine: "Engine"
  }

  const tableData = {
    rows: { ...rows },
    collection: "trucks",
    data,
    clickFunction: function (collection, id) {
      navigate(`/${collection}/${id}`)
    }
  }

  const fetchData = async () => {
    const data = await useFetch('http://localhost:5000/trucks')
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
