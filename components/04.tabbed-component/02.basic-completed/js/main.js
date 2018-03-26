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
  prevTabAndContent.forEach(el => el.classList.remove('is-active'))

  // Shows new tab and tabbed content
  const newTab = link.parentNode
  const newTabContent = component.querySelector(href)
  newTab.classList.add('is-active')
  newTabContent.classList.add('is-active')
})
