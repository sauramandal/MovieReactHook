export const clone = obj => JSON.parse(JSON.stringify(obj))
export const generateYears = () => {
    const years = []
    const startYear = 1900,
        currentYear = 2020
    for (let i = startYear; i <= currentYear; i++) {
        years.push(i.toString())
    }
    return years
}
