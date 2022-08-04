export const getHoursAndMinutes = (str) => {
    const arr = str.split(':')
    const hours = arr[0]
    const minutes = arr[1]
    return [hours, minutes]
}

export const updateTimeAndDate = (date, time) => {
    const updatedDate = new Date(date)
    const [hours, minutes] = getHoursAndMinutes(time)
    const newDate = new Date(updatedDate.getTime() + hours * 60 * 60 * 1000 + minutes * 60 * 1000)
    return newDate
}