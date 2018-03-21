// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const toggleButton = document.querySelector('.jsModalToggle')
const closeButton = document.querySelector('.jsModalClose')

toggleButton.addEventListener('click', _ => {
  document.body.classList.add('modal-is-open')
})

closeButton.addEventListener('click', _ => {
  document.body.classList.remove('modal-is-open')
})
