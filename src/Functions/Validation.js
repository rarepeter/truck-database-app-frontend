export const validate = (value, validations) => {
    let isEmptyError = false
    let minLengthError = false
    let maxLengthError = false
    let isEmailError = false

    for (const validation in validations) {
        switch (validation) {
            case 'isNotEmpty':
                if (value) {
                    isEmptyError = false
                } else { isEmptyError = true }
                break;
            case 'minLength':
                if (value.length < validations[validation]) minLengthError = true
                break;
            case 'maxLength':
                if (value.length > validations[validation]) maxLengthError = true
                break;
            case 'isEmail':
                if (String(value)
                    .toLowerCase().match(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    )) isEmailError = true
                break;
            default:
        }
    }


    return [
        { isEmptyError, msg: "Field is empty" },
        { minLengthError, msg: `Field is too short` },
        { maxLengthError, msg: `Field has too many characters` },
        { isEmailError, msg: "Field is not an email" }
    ]
}