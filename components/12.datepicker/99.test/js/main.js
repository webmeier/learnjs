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

const getMonthName = (month, style = 'long') => {
  const m = monthsInAYear[month]
  if (style === 'long') return m.longname
  return m.shortname
}

const today = new Date('April 2019')
const day = today.getDay()
const month = getMonthName(today.getMonth())

// Initial Setup (Lesson 1 on creating the table...)
const gridFirstDate = day + 1
document.querySelector('.datepicker__monthIndicator').textContent = month
document.querySelector('.datepicker__date-grid').children[0].style.setProperty('--first-day', gridFirstDate)
