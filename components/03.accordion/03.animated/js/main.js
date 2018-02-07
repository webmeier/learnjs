// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const accordionContainer = document.querySelector('.jsAccordionContainer')
accordionContainer.addEventListener('click', e => {
  const header = e.target.closest('.jsAccordionHeader')
  if (!header) return

  const accordion = header.parentNode
  const accordionContent = header.nextElementSibling
  const height = accordionContent.firstElementChild.getBoundingClientRect().height

  if (accordion.classList.contains('is-open')) {
    accordionContent.style.height = '0px'
    accordion.classList.remove('is-open')
  } else {
    accordionContent.style.height = height + 'px'
    accordion.classList.add('is-open')
  }
})
