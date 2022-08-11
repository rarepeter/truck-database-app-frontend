import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../Styles/Dbpage/Dbpage.css'
import Table from '../../Components/Table/Table'
import { useFetch } from '../../Hooks/useFetch'
import Button from '../../Components/Button/Button'
import { serverURL } from '../../Config/globalconfig'
import Selectdropdown from '../../Components/Selectdropdown/Selectdropdown'

export default function Trucksdb({ collection }) {

  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [selectedSort, setSelectedSort] = useState('')

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

  const sortOptions = [
    {
      value: 'brand',
      name: 'Brand'
    },
    {
      value: 'model',
      name: 'Model'
    },
    {
      value: 'licensePlate',
      name: 'License'
    },
  ]

  const sortItems = (sort) => {
    setSelectedSort(() => sort)
    setData([...data].sort((a, b) => a[sort].localeCompare(b[sort])))
  }
  
  console.log(selectedSort)

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
        <Selectdropdown defaultValue='Sort by' sortOptions={sortOptions} value={selectedSort} onChange={sortItems} />
        <Table tableData={tableData} />
      </div>
    </>
  )
}
