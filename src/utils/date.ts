export const getDateString = (date: Date) => {
    return `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`
}