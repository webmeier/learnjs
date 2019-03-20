// 1. Change Month in DatePicker
// 2. Did a refactor (Tiny changes, so we should actually use this to start with!)

// Names of months in a year
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

// Get the name of a given month
const getMonthName = (month, style = 'long') => {
  month = month % 12
  const m = monthsInAYear[month]
  if (style === 'long') return m.longname
  return m.shortname
}

// Get the number of days in a given month
const getDaysInAMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate()
}

// Need a better name for `createMonth`
const createMonth = (year, month, day = 1) => {
  const date = new Date(year, month, day)
  const firstDayOfMonth = date.getDay()

  // Create number of days
  const days = getDaysInAMonth(year, month)
  const buttons = Array.from({ length: days })
    .map((value, index) => {
      const style = index === 0
        ? `style="--first-day: ${firstDayOfMonth + 1}"`
        : ''
      return `
      <button ${style}>
        <time
          datetime="${year}-${month + 1}-${index + 1}"
          >${index + 1}
        </time>
      </button>`
    })
    .join('')

  const monthDiv = document.createElement('div')
  monthDiv.classList.add('datepicker__month')

  // Need to mod month back...
  monthDiv.innerHTML = `
    <div class="datepicker__monthIndicator" data-current-date="${year}-${(month % 12) + 1}-${day}">
      ${getMonthName(month)} ${year}
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

    <div class="datepicker__date-grid">
      ${buttons}
    </div>`

  return monthDiv
}

const formatDateString = (dateString) => {
  const date = new Date(dateString)
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()
  return `${day}/${month + 1}/${year}`
}

// Execution...
const datepicker = document.querySelector('.datepicker')
const datepickerBody = datepicker.querySelector('.datepicker__calendar')
const datepickerButtons = datepicker.querySelector('.datepicker__buttons')

// This must go somewhere...
const renderDatepicker = monthDiv => {
  datepickerBody.innerHTML = ''
  datepickerBody.appendChild(monthDiv)
}

const month = createMonth(2019, 1)
renderDatepicker(month)

// Freaking remember to add Pointer-events: none to CSS here!
datepickerBody.addEventListener('click', ev => {
  ev.preventDefault()
  if (!ev.target.matches('button')) return

  const dateString = ev.target.firstElementChild.getAttribute('datetime')
  const readableDate = formatDateString(dateString)
  const dateField = document.querySelector('#start-date')
  dateField.value = readableDate
})

datepickerButtons.addEventListener('click', ev => {
  // This will create some angst for OOP. Which is the perfect lead-in for OOP.
  // Things to know for OOP -> OOP has a closure (automatic). Explain closure.
  // We can also make this with functions without the OOP Syntax I guess...? But its the same idea here. We use a closure. But if we want to use this it feels more like a separate page thing already. For init-ing and stuff. But still we can use OOP too, because quite good for usage going forward.
  // Don't freaking functional everything because no point to do so. If you want to provide a good DX, sometimes OOP is good.
  const currentMonthString = datepickerButtons
    .parentElement
    .querySelector('.datepicker__monthIndicator')
    .dataset
    .currentDate
  const date = new Date(currentMonthString)
  let year = date.getFullYear()
  let month = date.getMonth()
  let newMonth

  if (ev.target.matches('.datepicker__next')) {
    if (month === 11) year += 1
    newMonth = createMonth(year, month + 1)
  } else {
    if (month === 0) {
      year -= 1
      month = 12
    }
    newMonth = createMonth(year, month - 1)
  }

  renderDatepicker(newMonth)
})
