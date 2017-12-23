// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const accordionContainer = document.querySelector('.jsAccordionContainer')
accordionContainer.addEventListener('click', e => {
  const header = e.target.closest('.jsAccordionHeader')
  if (!header) return

  const accordionClassList = header.parentNode.classList
  const content = header.nextElementSibling
  const height = content.firstElementChild.getBoundingClientRect().height

  if (accordionClassList.contains('is-open')) {
    content.style.height = '0px'
    accordionClassList.remove('is-open')
  } else {
    content.style.height = height + 'px'
    accordionClassList.add('is-open')
  }
})
