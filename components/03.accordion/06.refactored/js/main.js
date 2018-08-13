// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const getHeight = (accordion, content) => {
  const inner = content.children[0]
  const height = accordion.classList.contains('is-open')
    ? 0
    : inner.getBoundingClientRect().height

  return height
}

const toggleAccordion = accordion => {
  accordion.classList.toggle('is-open')
}

const updateHeight = (elem, height) => {
  elem.style.height = `${height}px`
}

const container = document.querySelector('.accordion-container')
container.addEventListener('click', e => {
  const header = e.target.closest('.accordion__header')
  if (!header) return

  const accordion = header.parentElement
  const content = header.nextElementSibling
  const height = getHeight(accordion, content)

  updateHeight(content, height)
  toggleAccordion(accordion)
})
