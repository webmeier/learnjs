// # START EDITING YOUR JAVASCRIPT HERE
// ===============

{
  const toggleAccordion = e => {
    const header = e.target.closest('.accordion__header')
    if (!header) return
    const accordion = header.parentElement
    const content = header.nextElementSibling
    const inner = content.children[0]
    const height = accordion.classList.contains('is-open')
    ? 0
    : inner.getBoundingClientRect().height

    content.style.height = `${height}px`
    accordion.classList.toggle('is-open')
  }

  const container = document.querySelector('.accordion-container')
  container.addEventListener('click', toggleAccordion)
}
