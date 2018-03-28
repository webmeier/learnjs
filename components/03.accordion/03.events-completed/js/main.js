// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const container = document.querySelector('.accordion-container')
// container.addEventListener('click', e => {
//   const header = e.target.closest('.accordion__header')
//   if (header) {
//     header.parentNode.classList.toggle('is-open')
//   }
// })

container.addEventListener('click', e => {
  console.log(e.target)
})
