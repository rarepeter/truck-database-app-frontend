import React from 'react'
import './Truckstable.css'
import Tablerow from '../../Components/Tablerow/Tablerow'
import Descriptionrow from '../Descriptionrow/Descriptionrow'

export default function Truckstable({ data }) {

    const rows = ['License plate', 'Brand', 'Model', 'Engine']

    return (
        <div className="table-area">
            <Descriptionrow rows={rows} />
            {data.map(item => <Tablerow key={item.id} rowdata={item} />)}
        </div>
    )
}
