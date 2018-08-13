// # START EDITING YOUR JAVASCRIPT HERE
// ===============
const component = document.querySelector('.tabbed-component')
const tabList = component.querySelector('.tabs')
const tabs = [...component.querySelectorAll('.tab')]
const contents = [...component.querySelectorAll('.tab-content')]

tabList.addEventListener('click', e => {
  const link = e.target.closest('a')
  const tab = link.parentNode
  const href = link.getAttribute('href')
  const tabContent = component.querySelector(href)

  // Hiding previous tab and tab content
  tabs.forEach(elem => elem.classList.remove('is-selected'))
  contents.forEach(elem => elem.classList.remove('is-selected'))

  // Showing the selected tab and tab content
  tab.classList.add('is-selected')
  tabContent.classList.add('is-selected')
})
