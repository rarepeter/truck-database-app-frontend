import React, { useState, useEffect } from 'react'
import { validate } from '../../Functions/Validation.js'

export default function Textinput({ inputClass, id, onChange, labelText, validations, isPassword }) {

    const [value, setValue] = useState('')
    const [validationErrors, setValidationErrors] = useState([])
    const [isDirty, setIsDirty] = useState(false)

    const handleOnChange = (e) => {
        setValue(() => e.target.value)
        onChange(e)
    }

    const handleOnBlur = () => {
        setIsDirty(true)
    }

    useEffect(() => {
        if (isDirty) {
            const errors = validate(value, validations)
            if (errors) setValidationErrors(() => errors)
        }
    }, [value, isDirty])

    return (
        <div className={inputClass}>
            {labelText !== undefined && <label htmlFor={id}>{labelText}</label>}
            <input type={isPassword ? 'password' : 'text'} placeholder={labelText} value={value} id={id} onChange={(e) => handleOnChange(e)} onBlur={handleOnBlur} />
            {validationErrors !== [] && validationErrors.map(item => {
                // eslint-disable-next-line
                if (Object.values(item)[0] === false) { return }
                return (<div className="error" key={Object.keys(item)[0]}>{item.msg}</div>)
            })}
        </div>
    )
}
