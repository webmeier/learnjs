// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const tabList = document.querySelector('.jsTabs')
const tabContent = Array.from(document.querySelectorAll('.jsTabContent'))

tabList.addEventListener('click', e => {
  if (!e.target.matches('a')) return
  const target = e.target
  const targetTab = target.getAttribute('href')
  const selectedTab = tabContent.find(tab => '#' + tab.dataset.tab === targetTab)

  // Hides all content
  Array.from(tabList.children).forEach(tabChild => tabChild.classList.remove('is-active'))
  tabContent.forEach(tab => tab.classList.remove('is-active'))

  // Shows current tab
  target.parentNode.classList.add('is-active')
  selectedTab.classList.add('is-active')
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
