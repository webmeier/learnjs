// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const accordionContainer = document.querySelector('.jsAccordionContainer')
accordionContainer.addEventListener('click', e => {
  const header = e.target.closest('.jsAccordionHeader')
  if (header) {
    header.parentNode.classList.toggle('is-open')
  }
})

// Enables Hot module replacement for Webpack. Leave this alone
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
