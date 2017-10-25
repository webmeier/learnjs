// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const tabList = document.querySelector('.jsTabList')

tabList.addEventListener('click', e => {
  if (!e.target.matches('a')) { return }
  e.preventDefault()

  const href = e.target.getAttribute('href')
  const newTab = e.target.parentNode
  const newTabContent = tabList.parentNode.querySelector(href)
  const prevTabAndContent = tabList.parentNode.querySelectorAll('.is-active')

  // Hide prev tab and content
  prevTabAndContent.forEach(elem => elem.classList.remove('is-active'))

  // show new tab and tab content
  newTab.classList.add('is-active')
  newTabContent.classList.add('is-active')
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
