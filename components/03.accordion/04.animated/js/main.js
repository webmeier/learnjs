// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const container = document.querySelector('.accordion-container')
container.addEventListener('click', e => {
  const header = e.target.closest('.accordion__header')
  if (header) {
    const accordion = header.parentElement
    const content = header.nextElementSibling
    const inner = content.children[0]
    const height = inner.getBoundingClientRect().height

    if (accordion.classList.contains('is-open')) {
      content.style.height = '0px'
    } else {
      content.style.height = height + 'px'
    }

    accordion.classList.toggle('is-open')
  }
})
