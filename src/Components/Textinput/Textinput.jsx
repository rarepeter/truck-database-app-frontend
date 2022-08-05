import React, { useState, useReducer } from 'react'
import { useValidation } from '../../Hooks/useValidation'


export default function Textinput({ inputClass, id, onChange, labelText, validations }) {

    const [value, setValue] = useState('')
    const [validationErrors, setValidationErrors] = useState([])
    
    const errors = useValidation(value, validations)

    const handleOnChange = (e) => {
        setValue(() => e.target.value)
        onChange(e)
        if (errors) setValidationErrors(() => errors)
    }

    const handleOnBlur = () => {
        if (errors) setValidationErrors(() => errors)
    }

    return (
        <div className={inputClass}>
            {labelText !== undefined && <label htmlFor={id}>{labelText}</label>}
            <input type="text" placeholder={labelText} value={value} id={id} onChange={(e) => handleOnChange(e)} onBlur={handleOnBlur} />
            {validationErrors !== [] && validationErrors.map(item => {
                if (Object.values(item)[0] === false) {return}
                return (<div className="error" key={Object.keys(item)[0]}>{item.msg}</div>)
            })}
        </div>
    )
}
