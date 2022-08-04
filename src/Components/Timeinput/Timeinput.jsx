import React, { useEffect, useState } from 'react'
import { updateTimeAndDate } from '../../Functions/Time.js'

export default function Timeinput({ minDate, id, divClass, onChange, labelText }) {

    const [date, setDate] = useState(minDate)
    const [time, setTime] = useState('00:00')

    useEffect(() => {
        onChange(updateTimeAndDate(date, time))
    }, [date, time])

    return (
        <div className={divClass}>
            <label htmlFor={id}>{labelText}</label>
            <input type="date" value={date} min={minDate} id={id} onChange={e => setDate(e.target.value)} />
            <input type="time" value={time} onChange={e => setTime(e.target.value)} />
        </div>
    )
}
