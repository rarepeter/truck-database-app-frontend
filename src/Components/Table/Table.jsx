import React from 'react'
import './Table.css'
import Tablerow from '../Tablerow/Tablerow'
import Descriptionrow from '../Descriptionrow/Descriptionrow'

export default function Table({ data, rows, collection }) {

    return (
        <div className="table-area">
            <Descriptionrow rows={rows} />
            {data.map(item => <Tablerow key={item.id} rowdata={item} rows={rows} collection={collection}/>)}
        </div>
    )
}
