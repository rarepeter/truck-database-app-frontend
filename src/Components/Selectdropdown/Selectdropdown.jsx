import React from 'react'

export default function Selectdropdown({ sortOptions, defaultValue, value, onChange }) {
    return (
        <>
            {/* <label htmlFor="select-sort">Sort by:</label> */}
            <select id="select-sort" value={value} onChange={e => onChange(e.target.value)} >
                <option disabled value=''>{defaultValue}</option>
                {
                    sortOptions.map(option => {
                        return (<option key={option.value} value={option.value}>{option.name}</option>)
                    })
                }
            </select >
        </>
    )
}
