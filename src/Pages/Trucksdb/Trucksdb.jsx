import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

export default function Trucksdb() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await axios.get('http://localhost:5000/trucks')
        setData(data)
    }

    // setTimeout(() => {
    //     fetchData()
    // }, 5000);
    console.log(data.data)
  return (
    <>
        <div>asd</div>
        {data.data != undefined && data.data.map(item => <div>{item.truckId}</div>)}
    </>
  ) 
}
