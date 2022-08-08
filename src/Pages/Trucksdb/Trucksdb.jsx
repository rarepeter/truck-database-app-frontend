import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../Styles/Dbpage/Dbpage.css'
import Table from '../../Components/Table/Table'
import { useFetch } from '../../Hooks/useFetch'
import Button from '../../Components/Button/Button'
import { serverURL } from '../../Config/globalconfig'

export default function Trucksdb({ collection }) {

  const navigate = useNavigate()
  const [data, setData] = useState([])

  const tableData = {
    rows: {
      licensePlate: "License plate",
      brand: "Brand",
      model: "Model",
      engine: "Engine"
    },
    collection,
    data,
    rowClickFunction: function (collection, id) {
      navigate(`/${collection}/${id}`)
    }
  }

  useEffect(() => {
    (async () => {
      const truckData = await useFetch(`${serverURL}/${collection}`)
      setData(truckData)
    })()
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
