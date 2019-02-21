export default {
  formatPostDate(date) {
    if (typeof Date.prototype.toLocaleDateString !== 'function') return date
    date = new Date(date)
    const args = [
      'en-EN',
      { day: 'numeric', month: 'long', year: 'numeric' }
    ].filter(Boolean)
    return `${date.toLocaleDateString(...args)}`
  },
  formatReadingTime(minutes) {
    const cups = Math.round(minutes / 5)
    return `${new Array(cups || 1).fill('☕️').join('')} ${minutes} min to read`
  }
}
