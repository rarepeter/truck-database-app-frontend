import React from 'react'
import './Table.css'
import Tablerow from '../Tablerow/Tablerow'
import Descriptionrow from '../Descriptionrow/Descriptionrow'

export default function Table({ tableData }) {
    return (
        <div className="table-area">
            <Descriptionrow rows={tableData.rows} />
            {tableData.data.map(item =>
                <Tablerow
                    key={item.id}
                    rowdata={item}
                    rows={tableData.rows}
                    collection={tableData.collection}
                    rowClickFunction={tableData.rowClickFunction} />)}
        </div>
    )
}
