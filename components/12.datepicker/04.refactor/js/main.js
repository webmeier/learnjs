const getMonthName = (month, style = 'long') => {
  const monthsInAYear = [
    { shortname: 'Jan', longname: 'January' },
    { shortname: 'Feb', longname: 'February' },
    { shortname: 'Mar', longname: 'March' },
    { shortname: 'Apr', longname: 'April' },
    { shortname: 'May', longname: 'May' },
    { shortname: 'Jun', longname: 'June' },
    { shortname: 'Jul', longname: 'July' },
    { shortname: 'Aug', longname: 'August' },
    { shortname: 'Sep', longname: 'September' },
    { shortname: 'Oct', longname: 'October' },
    { shortname: 'Nov', longname: 'November' },
    { shortname: 'Dec', longname: 'December' }
  ]
  const m = monthsInAYear[month]
  if (style === 'long') return m.longname
  return m.shortname
}

const getMonthIndicatorText = (date) => {
  const year = date.getFullYear()
  const month = date.getMonth()
  const monthName = getMonthName(month)
  return `${monthName} ${year}`
}

const getMonthIndicatorDatetime = date => {
  const year = date.getFullYear()
  const month = date.getMonth()
  return `${year}-${month + 1}`
}

const getFirstDayOfMonth = date => {
  const firstDateOfMonth = new Date(date.setDate(1))
  return firstDateOfMonth.getDay()
}

const getNumDaysInMonth = date => {
  const year2 = date.getFullYear()
  const month = date.getMonth()
  const lastDayInMonth = new Date(year2, month + 1, 0)
  return lastDayInMonth.getDate()
}

const getDategridHTML = date => {
  const year = date.getFullYear()
  const month = date.getMonth()
  return Array.from({ length: getNumDaysInMonth(date) })
    .map((value, index) => {
      const day = index + 1
      const firstDayStyle = day === 1
        ? `--firstDayOfMonth: ${getFirstDayOfMonth(date) + 1}"`
        : ''

      return `
        <button style="${firstDayStyle}">
          <time datetime="${year}-${month + 1}-${day}">${day}</time>
        </button>
      `
    })
    .join('')
}

// Execution
const date = new Date(2019, 1)

// Setting Month indicator text
const datepicker = document.querySelector('.datepicker')
const monthIndicatorDiv = datepicker.querySelector('.datepicker__monthIndicator')
const monthIndicatorTimeElement = monthIndicatorDiv.firstElementCHild
monthIndicatorTimeElement.textContent = getMonthIndicatorText(date)
monthIndicatorTimeElement.setAttribute('datetime', getMonthIndicatorDatetime(date))

// Creating Dates
const datesDiv = document.querySelector('.datepicker__date-grid')
datesDiv.innerHTML = getDategridHTML(date)
