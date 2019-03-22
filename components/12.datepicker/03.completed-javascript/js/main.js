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

// Getting and setting month indicator text
const date = new Date(2019, 4)
const year = date.getFullYear()
const month = date.getMonth()
const monthName = getMonthName(month)
const monthIndicatorText = `${monthName} ${year}`

const datepicker = document.querySelector('.datepicker')
const monthIndicatorTimeElement = datepicker.querySelector('.datepicker__monthIndicator').firstElementChild
monthIndicatorTimeElement.textContent = monthIndicatorText
monthIndicatorTimeElement.setAttribute('datetime', `${year}-${month + 1}`)

// Creating the grid
const firstDayOfMonth = new Date(date.setDate(1)).getDay()
const year2 = date.getFullYear()
const month2 = date.getMonth()
const lastDayInMonth = new Date(year2, month2 + 1, 0)
const daysInMonth = lastDayInMonth.getDate()

let dategridHTML = ''
for (let day = 1; day < daysInMonth; day++) {
  const firstDayStyle = day === 1
    ? `--firstDayOfMonth: ${firstDayOfMonth + 1}"`
    : ''

  dategridHTML += `<button style="${firstDayStyle}">
    <time datetime="${year}-${month + 1}-${day}">${day}</time>
  </button>
  `
}

const dategrid = document.querySelector('.datepicker__date-grid')
dategrid.innerHTML = dategridHTML
