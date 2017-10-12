// Your JavaScript goes here
const offsiteToggle = document.querySelector('.jsOffsiteToggle')

offsiteToggle.addEventListener('click', _ => {
  console.log('snthe')
  document.body.classList.toggle('offsite-is-open')
})

// Enables HMR for development purposes. Degrades gracefully to nothing in production. Leave is alone.
if (process.env.NODE_ENV === 'development') {
  if (module.hot) module.hot.accept()

  // Silence HMR rubbish logs
  ;(function (global) {
    var consoleLog = global.console.log
    global.console.log = function () {
      if (!(
            arguments.length === 1 &&
            typeof arguments[0] === 'string' &&
            arguments[0].match(/^\[(HMR|WDS)\]/)
          )) {
        consoleLog.apply(global.console, arguments)
      }
    }
  })(window)
}
