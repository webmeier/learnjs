// OOP Everythnig...

class Datepicker {
  // Then in this case, probably good to push set date to another time because... we can use this set date thing to change the DOM main body. Which makens much more sense.
  constructor (div, options = {}) {
    const defaults = {
      date: new Date()
    }

    options = Object.assign({}, defaults, options)

    this.dom = { datepickerDiv: div }
    this.state = {}

    this.setDate(options.date)
    this.setDisplayedDate(options.date)

    this.createDatepicker()
  }

  createDatepicker () {
    const datepicker = this.dom.datepickerDiv
    datepicker.innerHTML = `
      <div class="datepicker__buttons">
        <button class="datepicker__previous">
          <svg viewBox="0 0 20 20">
            <polygon
              points="3.828 9 9.899 2.929 8.485 1.515 0 10 .707 10.707 8.485 18.485 9.899 17.071 3.828 11 20 11 20 9 3.828 9"
            />
          </svg>
        </button>
        <button class="datepicker__next">
          <svg viewBox="0 0 20 20">
            <polygon
              points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"
            />
          </svg>
        </button>
      </div>

      <div class="datepicker__calendar"></div>
    `

    this.dom.mainBody = datepicker.querySelector('.datepicker__calendar')
    this.dom.mainBody.innerHTML = this.createMainBody()
    this.dom.mainBody.addEventListener('click', ev => {
      ev.preventDefault()
      if (!ev.target.matches('button')) return

      const dateString = ev.target.firstElementChild.getAttribute('datetime')
      const readableDate = this.toReadableDate(new Date(dateString))
      const dateField = document.querySelector('#start-date')
      dateField.value = readableDate
    })

    this.dom.buttons = datepicker.querySelector('.datepicker__buttons')
    this.dom.prevMonthButton = datepicker.querySelector('.datepicker__previous')
    this.dom.nextMonthButton = datepicker.querySelector('.datepicker__next')
    this.dom.buttons.addEventListener('click', ev => {
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

    // Update Main Body...
    // Re-render Main body...
  }

  createMainBody () {
    // 1. Test for options....?
    // 2. Create "Calendar".
    const date = this.state.displayedDate
    console.log(date)

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
      <div class="datepicker__dates">
        ${this.getDates(date)}
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
  getDates (date) {
    const firstDayOfMonth = this.getFirstDayOfMonth(date)
    const daysInMonth = this.getDaysInMonth(date)
    const year = date.getFullYear()
    const month = date.getMonth() + 1

    return Array.from({ length: daysInMonth })
      .map((value, day) => {
        const style = day === 0
          ? `style="--first-day: ${firstDayOfMonth + 1}"`
          : ''
        return `
      <button ${style}>
        <time
          datetime="${year}-${month}-${day + 1}"
          >${day + 1}
        </time>
      </button>`
      })
      .join('')
  }

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

  setDate (date) {
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
}

const datepickerDiv = document.querySelector('.datepicker')

const d = new Datepicker(datepickerDiv, {
  date: new Date(2019, 5, 5)
})

// Give a choice...
// Create Datepicker... but positioning? Should I choose it myself?
// The key is we need to create the datepicker with a popup...
// But calculating this popup is crazy haha...

// Next up:
// 1. Remove common functions so we can use closures... and don't `this` everything.
//   Why? Makes it clearer what methods are required by each individual instance
//   And the rest of the methods can be shared (on a code-related basis).
//   Plus right now there are too many methods available for our users. Want to clean it up
// 2. default selected date
// 3. Date range selection
// 4. Hover date range
// 5. Multi-month calendar
// 6.
