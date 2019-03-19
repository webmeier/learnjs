// Write your JavaScript here
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

const date = new Date(2019, 1)
const monthName = getMonthName(date.getMonth())
const year = date.getFullYear()
const monthIndicatorText = `${monthName} ${year}`

// Setting Month indicator text
const datepicker = document.querySelector('.datepicker')
const monthIndicatorDiv = datepicker.querySelector('.datepicker__monthIndicator')
monthIndicatorDiv.textContent = monthIndicatorText

// Creating the grid
const firstDayOfMonth = new Date(date.setDate(1)).getDay()

const year2 = date.getFullYear()
const month = date.getMonth()
const lastDayInMonth = new Date(year2, month + 1, 0)
const daysInMonth = lastDayInMonth.getDate()

let datesInnerHTML = ''
for (let day = 1; day < daysInMonth; day++) {
  const firstDayStyle = day === 1
    ? `--firstDayOfMonth: ${firstDayOfMonth + 1}"`
    : ''

  datesInnerHTML += `<button style="${firstDayStyle}">
    <time datetime="${year}-${month + 1}-${day}">${day}</time>
  </button>
  `
}

const datesDiv = document.querySelector('.datepicker__dates')
datesDiv.innerHTML = datesInnerHTML
