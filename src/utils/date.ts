// getDateString: Converts string to date
// Mostly used for post cards and post headings
export const getDateString = (date: Date) => {
    return `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`
}