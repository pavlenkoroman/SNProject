export const required = value => {
    if (value)
        return undefined
        return 'This field is Required!';
}

export const maxLength = maxSymbols => value => {
    if (value.length <= maxSymbols)
        return undefined
        return `Too much symbols! You have to remove at least ${value.length - maxSymbols} symbols.`
}

export const minLength = minSymbols => value => {
    if (value.length >= minSymbols)
        return undefined
        return `You have to add at least ${ minSymbols - value.length } symbols.`
}

export const email = value => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
        return 'Invalid email address'
        return undefined
}