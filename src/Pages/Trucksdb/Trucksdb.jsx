import React, { useEffect, useMemo, useState } from 'react'
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
  const [searchQuery, setSearchQuery] = useState('')

  const sortedData = useMemo(() => {
    console.log(111)
    if (selectedSort) {
      return [...data].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return data
  }, [selectedSort, data])

  const sortedAndQueriedData = useMemo(() => {
    return sortedData.filter(item => item.brand.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, sortedData])

  const tableData = {
    rows: {
      licensePlate: "License plate",
      brand: "Brand",
      model: "Model",
      engine: "Engine"
    },
    collection,
    data: sortedAndQueriedData,
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
      name: 'License plate'
    }
  ]

  const sortItems = (sort) => {
    setSelectedSort(() => sort)
    setData([...data].sort((a, b) => a[sort].localeCompare(b[sort])))
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
        <Selectdropdown defaultValue='Sort by:' sortOptions={sortOptions} value={selectedSort} onChange={sortItems} />
        <input type="text" placeholder='Search...' value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
        <Table tableData={tableData} />
      </div>
    </>
  )
}
