import { useEffect, useState } from "react"

export const useValidation = (value, validations) => {
    const [isEmptyError, setIsEmptyError] = useState(false)
    const [minLengthError, setMinLengthError] = useState(false)
    const [maxLengthError, setMaxLengthError] = useState(false)
    const [isEmailError, setIsEmailError] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'isNotEmpty':
                    value ? setIsEmptyError(false) : setIsEmptyError(true)
                    break;
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'maxLength':
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
                    break;
                case 'isEmail':
                    String(value)
                        .toLowerCase().match(
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        ) ? setIsEmailError(false) : setIsEmailError(true)
                    break;
                default:
            }
        }
    }, [value])

    return [
        { isEmptyError, msg: "Field is empty" },
        { minLengthError, msg: `Field is too short` },
        { maxLengthError, msg: `Field has too many characters` },
        { isEmailError, msg: "Field is not an email" }
    ]
}