// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const accordionContainer = document.querySelector('.jsAccordionContainer')
accordionContainer.addEventListener('click', e => {
  const header = e.target.closest('.jsAccordionHeader')
  if (header) {
    header.parentNode.classList.toggle('is-open')
  }
})
