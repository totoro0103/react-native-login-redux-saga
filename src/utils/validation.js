export const validations = {
    email: {
        presence: {
            message: 'Vui lòng nhập email'
        },
        format: {
            pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            message: 'Email nhập không đúng định dạng'
        }
    },
    password: {
        presence: {
            message: 'Vui lòng nhập mật khẩu '
        }, length: {
            
        }
    }
}
export const validate = (nameField, value) => {
    let result = { isError: false, messageError: '' }
    if (validations.hasOwnProperty(nameField)) {
        let v = validations[nameField]
        if (value == '' || value === null) {
            result = { isError: true, messageError: v.presence.message }
        } else if (v.hasOwnProperty('format') && !v.format.pattern.test(value)) {
            result = { isError: true, messageError: v.format.message}
        } else {
            result.isError = false
        }
    } else {
        result.isError = false
    }
    return result
}