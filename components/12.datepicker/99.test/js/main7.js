// Changes:
// 1. Show today
// 2. Show selected date
// 3. Commented out show/hide on focus/blur (because irritating and hard to debug)

class Datepicker {
  constructor (options) {
    this.dom = {}
    this.state = {}

    const defaults = {
      date: new Date()
    }

    options = Object.assign({}, defaults, options)

    this.setSelectedDate(options.date)
    this.setDisplayedDate(options.date)
    this.dom.boundField = options.boundField

    this.createDatepicker()
    // this.hideDatepicker()
  }

  createDatepicker () {
    const datepicker = document.createElement('div')
    datepicker.classList.add(`datepicker`)
    datepicker.innerHTML = `
      <div class="datepicker__buttons">
        <button class="datepicker__previous">
          <svg viewBox="0 0 20 20">
            <path fill="currentColor" d="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z"/></svg>
          </svg>
        </button>
        <button class="datepicker__next">
          <svg viewBox="0 0 20 20">
            <path fill="currentColor" d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/>
          </svg>
        </button>
      </div>

      <div class="datepicker__calendar"></div>
    `

    this.el = datepicker

    // To prevent input blur.
    // Order of events:
    // 1. Mousedown
    // 2. Blur
    // 3. Mouseup
    // 4. Click

    this.el.addEventListener('mousedown', ev => {
      ev.preventDefault()
    })

    this.dom.mainBody = datepicker.querySelector('.datepicker__calendar')
    this.dom.mainBody.innerHTML = this.createMainBody()

    this.dom.mainBody.addEventListener('click', ev => {
      ev.preventDefault()
      if (!ev.target.matches('button')) return

      const dateString = ev.target.firstElementChild.getAttribute('datetime')
      const date = new Date(dateString)
      const readableDate = this.toReadableDate(date)
      const dateField = document.querySelector('#start-date')
      dateField.value = readableDate

      this.setSelectedDate(date)

      ;[...ev.target.parentNode.children].forEach(element => {
        element.classList.remove('is-selected')
      })
      ev.target.classList.add('is-selected')
    })

    // Update DOM with Selected date(s)
    this.dom.buttons = datepicker.querySelector('.datepicker__buttons')
    this.dom.prevMonthButton = datepicker.querySelector('.datepicker__previous')
    this.dom.nextMonthButton = datepicker.querySelector('.datepicker__next')
    this.dom.buttons.addEventListener('click', ev => {
      // Note: This is activate when pressing enter on the input. Why?
      // console.log('test')
      // Cannot use selected date from now on, because we need to differentiate selected vs the displayed month
      ev.preventDefault()
      if (!ev.target.matches('button')) return

      const target = ev.target
      const displayedDate = this.state.displayedDate
      let year = displayedDate.getFullYear()
      let month = displayedDate.getMonth()

      if (target === this.dom.prevMonthButton) {
        this.setDisplayedDate(new Date(year, month - 1))
        this.dom.mainBody.innerHTML = this.createMainBody()
      }

      if (target === this.dom.nextMonthButton) {
        this.setDisplayedDate(new Date(year, month + 1))
        this.dom.mainBody.innerHTML = this.createMainBody()
      }
    })

    this.dom.boundField.addEventListener('focusin', ev => {
      // If you remove arrow functions, this doesn't work. Be careful when refactoring.
      this.showDatepicker()
    })

    this.dom.boundField.addEventListener('blur', ev => {
      this.hideDatepicker()
    })
  }

  createMainBody () {
    const date = this.state.displayedDate

    return `
      <div class="datepicker__monthIndicator">${this.getMonthHeader(date)}</div>
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
        ${this.dategridHTML(date)}
      </div>
    `
  }

  getMonthName (month, style = 'long') {
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

    month = month % 12
    const m = monthsInAYear[month]
    if (style === 'long') return m.longname
    return m.shortname
  }

  getMonthHeader (date) {
    const month = this.getMonthName(date.getMonth())
    const year = date.getFullYear()
    return `${month} ${year}`
  }

  // Create a button for each date of the month
  dategridHTML (date) {
    const firstDayOfMonth = this.getFirstDayOfMonth(date)
    const daysInMonth = this.getDaysInMonth(date)
    const year = date.getFullYear()
    const month = date.getMonth() + 1

    return Array.from({ length: daysInMonth })
      .map((value, day) => {
        const gregorianDateFormat = `${year}-${month}-${day + 1}`
        const buttonDate = new Date(gregorianDateFormat)
        const todayAttr = this.isToday(buttonDate)
          ? 'data-today'
          : ''

        const style = day === 0
          ? `style="--first-day: ${firstDayOfMonth + 1}"`
          : ''
        return `
      <button ${style} ${todayAttr}>
        <time
          datetime="${gregorianDateFormat}"
          >${day + 1}
        </time>
      </button>`
      })
      .join('')
  }

  isToday (date) {
    const today = new Date()

    return date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
  }

  // Gets the first day of the month (to place dates in the grid)
  getFirstDayOfMonth (date) {
    const year = date.getFullYear()
    const month = date.getMonth()
    return new Date(year, month, 1).getDay()
  }

  getDaysInMonth (date) {
    const year = date.getFullYear()
    const month = date.getMonth()
    return new Date(year, month + 1, 0).getDate()
  }

  setSelectedDate (date) {
    this.state.selectedDate = date
  }

  setDisplayedDate (date) {
    this.state.displayedDate = date
  }

  toReadableDate (date) {
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    return `${day}/${month + 1}/${year}`
  }

  // Shows datepicker
  showDatepicker () {
    this.el.removeAttribute('hidden')
  }

  // Hides datepicker
  hideDatepicker () {
    this.el.setAttribute('hidden', true)
  }
}

const form = document.querySelector('form')
const datepicker = new Datepicker({
  boundField: form.querySelector('#start-date'),
  date: new Date()
})

form.appendChild(datepicker.el)

// Next up:
// 1. Remove common functions so we can use closures (or let, or IIFE)... and don't `this` everything.
//   Why? Makes it clearer what methods are required by each individual instance
//   And the rest of the methods can be shared (on a code-related basis).
//   Plus right now there are too many methods available for our users. Want to clean it up
// 3. Date range selection
// 4. Hover date range
// 5. Multi-month calendar

// By the end, ask people to check out other datepickers like Airbnb React Datepicker. Pickaday, etc. Watch how different we code it. There's no one-answer for all.

// Advanced Datepicker
// 1. Date-range selection
// 2. Blackout dates
// 3. Click on Month/Year selection
