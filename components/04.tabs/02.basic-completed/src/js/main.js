// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const tabList = document.querySelector('.jsTabList')

tabList.addEventListener('click', e => {
  if (!e.target.matches('a')) { return }
  e.preventDefault()

  const link = e.target
  const href = link.getAttribute('href')
  const component = tabList.parentNode

  // Hides previous tab and tabbed content
  const prevTabAndContent = component.querySelectorAll('.is-active')
  prevTabAndContent.forEach(elem => elem.classList.remove('is-active'))

  // Shows new tab and tabbed content
  const newTab = link.parentNode
  const newTabContent = component.querySelector(href)
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
