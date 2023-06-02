
export default function getDate(date: Date) {
    return date.toLocaleDateString('en-US', { dateStyle: 'medium' })
}