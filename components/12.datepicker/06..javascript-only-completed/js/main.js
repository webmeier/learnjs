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
  const firstDayOfMonth = new Date(date.setDate(1))
  return firstDayOfMonth.getDay()
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

const createDatepicker = date => {
  const datepicker = document.createElement('div')
  datepicker.classList.add('datepicker')

  const buttons = `
    <div class="datepicker__buttons">
      <button class="datepicker__previous">
        <svg viewBox="0 0 20 20">
          <path fill="currentColor" d="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z" /></svg>
        </svg>
      </button>
      <button class="datepicker__next">
        <svg viewBox="0 0 20 20">
          <path fill="currentColor" d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
        </svg>
      </button>
    </div>
  `

  const calendar = `
    <div class="datepicker__calendar">
      <div class="datepicker__monthIndicator">${getMonthIndicatorText(date)}</div>
      <div class="datepicker__dayOfWeek">
        <div>Su</div>
        <div>Mo</div>
        <div>Tu</div>
        <div>We</div>
        <div>Th</div>
        <div>Fr</div>
        <div>Sa</div>
      </div>
      <div class="datepicker__date-grid">${getDategridHTML(date)}</div>
    </div>
  `

  datepicker.innerHTML = `
    ${buttons}
    ${calendar}
  `

  return datepicker
}

// Execution
const date = new Date(2019, 1)
const datepicker = createDatepicker(date)

// Adding to DOM
const form = document.querySelector('form')
form.appendChild(datepicker)
