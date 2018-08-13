// # START EDITING YOUR JAVASCRIPT HERE
// ===============
const toggleTabs = (e, component) => {
  const link = e.target.closest('a')
  const href = link.getAttribute('href')
  const selectedTab = link.parentNode
  const selectedTabContent = component.querySelector(href)
  const tabs = [...selectedTab.parentElement.children]
  const tabContents = [...component.querySelectorAll('.tab-content')]

  // Hiding previous tab and tab content
  tabs.forEach(elem => elem.classList.remove('is-selected'))
  tabContents.forEach(elem => elem.classList.remove('is-selected'))

  // Showing the selected tab and tab content
  selectedTab.classList.add('is-selected')
  selectedTabContent.classList.add('is-selected')
}

const component = document.querySelector('.tabbed-component')
const tabList = component.querySelector('.tabs')

tabList.addEventListener('click', e => toggleTabs(e, component))
