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

  return Array.from({ length: getNumDaysInMonth(date) })
    .map((value, index) => {
      const day = index + 1
      const firstDayStyle = day === 1
        ? `--firstDayOfMonth: ${getFirstDayOfMonth(date) + 1}"`
        : ''

      return `
        <button type="button" style="${firstDayStyle}">
          <time datetime="${formatDate(new Date(year, month, day), 'YYYY-MM-DD')}">${day}</time>
        </button>
      `
    })
    .join('')
}

const createDateFromDatetime = datetime => {
  const [year, month, day = 1] = datetime.split('-')
    .map(num => parseInt(num))

  // Remember, `month` needs to be zero-indexed
  return new Date(year, month - 1, day)
}

const getTargetMonth = (datepicker, delta) => {
  const timeEl = datepicker.querySelector('.datepicker__monthIndicator').firstElementChild
  const datetime = timeEl.getAttribute('datetime')
  const currentDate = createDateFromDatetime(datetime)
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  return new Date(year, month + delta)
}

const updateYearMonthIndicator = (datepicker, targetMonth) => {
  const timeEl = datepicker.querySelector('.datepicker__monthIndicator').firstElementChild
  timeEl.textContent = getMonthIndicatorText(targetMonth)
  timeEl.setAttribute('datetime', getMonthIndicatorDatetime(targetMonth))
}

const updateDateGrid = (datepicker, targetMonth) => {
  const dategrid = datepicker.querySelector('.datepicker__date-grid')
  dategrid.innerHTML = getDategridHTML(targetMonth)
}

const getSelectedDate = selectedButton => {
  const timeEl = selectedButton.firstElementChild
  const datetime = timeEl.getAttribute('datetime')
  return createDateFromDatetime(datetime)
}

const formatDate = (date, format) => {
  const year = date.getFullYear()
  const month = `${date.getMonth() + 1}`.padStart(2, '0')
  const day = `${date.getDate()}`.padStart(2, '0')

  // Return the required format
  if (format === 'YYYY-MM') return `${year}-${month}`
  if (format === 'YYYY-MM-DD') return `${year}-${month}-${day}`
  if (format === 'DD/MM/YYYY') return `${day}/${month}/${year}`
}

const updateDateField = (dateField, date) => {
  dateField.value = date
}

const highlightSelectedButton = selectedButton => {
  const buttons = [...selectedButton.parentElement.children]
  buttons.forEach(button => button.classList.remove('is-selected'))
  selectedButton.classList.add('is-selected')
}

const handlePreviousNextMonthButtons = (ev, datepicker) => {
  if (!ev.target.matches('button')) return

  const changeInMonths = ev.target.matches('.datepicker__previous')
    ? -1
    : 1

  const targetMonth = getTargetMonth(datepicker, changeInMonths)
  updateYearMonthIndicator(datepicker, targetMonth)
  updateDateGrid(datepicker, targetMonth)
}

const handleSelectedDate = (ev, dateField) => {
  if (!ev.target.matches('button')) return

  const selectedDate = getSelectedDate(ev.target)
  const formattedDate = formatDate(selectedDate, 'DD/MM/YYYY')
  updateDateField(dateField, formattedDate)
  highlightSelectedButton(ev.target)
}

const createDatepicker = (date, dateField) => {
  const datepicker = document.createElement('div')
  datepicker.classList.add('datepicker')

  const buttonsHTML = `
    <div class="datepicker__buttons">
      <button type="button" class="datepicker__previous">
        <svg viewBox="0 0 20 20">
          <path fill="currentColor" d="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z" /></svg>
        </svg>
      </button>
      <button type="button" class="datepicker__next">
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

  const previousNextButtonsParentDiv = datepicker.querySelector('.datepicker__buttons')
  previousNextButtonsParentDiv.addEventListener('click', ev => handlePreviousNextMonthButtons(ev, datepicker))

  const dategrid = datepicker.querySelector('.datepicker__date-grid')
  dategrid.addEventListener('click', ev => handleSelectedDate(ev, dateField))

  return datepicker
}

// Creating and Adding the Datepicker to the DOM
const date = new Date(2019, 1)
const form = document.querySelector('form')
const input = form.querySelector('input')
const datepicker = createDatepicker(date, input)

form.appendChild(datepicker)
