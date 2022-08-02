import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../Styles/Dbpage/Dbpage.css'
import Table from '../../Components/Table/Table'
import { useFetch } from '../../Hooks/useFetch'
import Button from '../../Components/Button/Button'

export default function Trucksdb() {

  const [data, setData] = useState([])
  const navigate = useNavigate()

  const tableData = {
    rows: {
      licensePlate: "License plate",
      brand: "Brand",
      model: "Model",
      engine: "Engine"
    },
    collection: "trucks",
    data,
    rowClickFunction: function (collection, id) {
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
        <Button onClick={() => navigate('/addtruck')}>Add a truck</Button>
        <Table tableData={tableData} />
      </div>
    </>
  )
}
