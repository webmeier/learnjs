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
  const datetimeMonth = `${month + 1}`.padStart(2, '0')
  return `${year}-${datetimeMonth}`
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
  const datetimeMonth = `${month + 1}`.padStart(2, '0')

  return Array.from({ length: getNumDaysInMonth(date) })
    .map((value, index) => {
      const day = index + 1
      const datetimeDay = `${day}`.padStart(2, '0')
      const firstDayStyle = day === 1
        ? `--firstDayOfMonth: ${getFirstDayOfMonth(date) + 1}"`
        : ''

      return `
        <button style="${firstDayStyle}">
          <time datetime="${year}-${datetimeMonth}-${datetimeDay}">${day}</time>
        </button>
      `
    })
    .join('')
}

const createDateFromDatetime = datetime => {
  const [year, month] = datetime.split('-')
    .map(num => parseInt(num))

  // Remember, `month` needs to be zero-indexed
  return new Date(year, month - 1)
}

const createDatepicker = date => {
  const datepicker = document.createElement('div')
  datepicker.classList.add('datepicker')

  const buttonsHTML = `
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

  const calendarHTML = `
    <div class="datepicker__calendar">
      <div class="datepicker__monthIndicator">
        <time datetime="${getMonthIndicatorDatetime(date)}">${getMonthIndicatorText(date)}</time>
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
      <div class="datepicker__date-grid">${getDategridHTML(date)}</div>
    </div>
  `

  datepicker.innerHTML = `
    ${buttonsHTML}
    ${calendarHTML}
  `

  const buttonsDiv = datepicker.querySelector('.datepicker__buttons')

  buttonsDiv.addEventListener('click', ev => {
    if (!ev.target.matches('button')) return

    const timeEl = datepicker.querySelector('.datepicker__monthIndicator').firstElementChild
    const datetime = timeEl.getAttribute('datetime')
    const currentDate = createDateFromDatetime(datetime)
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    const targetMonth = ev.target.matches('.datepicker__previous')
      ? new Date(year, month - 1)
      : new Date(year, month + 1)

    // Update the year/month indicator
    timeEl.textContent = getMonthIndicatorText(targetMonth)
    timeEl.setAttribute('datetime', getMonthIndicatorDatetime(targetMonth))

    // Change the date grid
    const dategrid = datepicker.querySelector('.datepicker__date-grid')
    dategrid.innerHTML = getDategridHTML(targetMonth)
  })

  return datepicker
}

// Execution
const date = new Date(2019, 1)
const datepicker = createDatepicker(date)

// Adding to DOM
const form = document.querySelector('form')
form.appendChild(datepicker)
