// Created Datepicker with JS
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

// Month here is 1-indexed. But why?!
// Check how to get last day of month. Important to teach...
// Should change to 0-indexed to be consistent... or change all to 1-indexed to be consistent
const getDaysInAMonth = (month, year) => {
  return new Date(year, month, 0).getDate()
}

const createMonth = (year, month) => {
  const date = new Date(year, month)
  const firstDayOfMonth = date.getDay()

  // Create number of days
  const days = getDaysInAMonth(year, month - 1)
  const buttons = Array.from({ length: days })
    .map((value, index) => {
      const style = index === 0
        ? `style="--first-day: ${firstDayOfMonth + 1}"`
        : ''
      return `<button ${style}>${index + 1}</button>`
    })
    .join('')

  const monthDiv = document.createElement('div')
  monthDiv.classList.add('datepicker__month')

  monthDiv.innerHTML = `
    <div class="datepicker__monthIndicator">
      ${getMonthName(month)}
    </div>
    <div class="datepicker__dayOfWeek">
      <div>Su</div>
      <div>Mo</div>
      <div>Tu</div>
      <div>We</div>
      <div>Th</div>
      <div>Fr</div>
      <div>Sa</div>
    </div>

    <div class="datepicker__dates">
      ${buttons}
    </div>`

  datepickerBody.appendChild(monthDiv)
}

const datepicker = document.querySelector('.datepicker')
const datepickerBody = datepicker.querySelector('.datepicker__calendar')
createMonth(2019, 2)
