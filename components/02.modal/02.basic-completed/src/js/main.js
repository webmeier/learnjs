// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const toggleButton = document.querySelector('.jsModalToggle')
const overlay = document.querySelector('.jsModalContainer')
const content = document.querySelector('.jsModal')
const closeButton = document.querySelector('.jsModalClose')

const openModal = _ => document.body.classList.add('modal-is-open')
const closeModal = _ => document.body.classList.remove('modal-is-open')

toggleButton.addEventListener('click', openModal)
content.addEventListener('click', e => e.stopPropagation())
overlay.addEventListener('click', closeModal)
closeButton.addEventListener('click', closeModal)

// Enables Hot module replacement for Webpack. Leave this alone
if (process.env.NODE_ENV === 'development') {
  // if (module.hot) module.hot.accept()

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
