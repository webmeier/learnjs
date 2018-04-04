// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const toggleButton = document.querySelector('.jsModalToggle')
const closeButton = document.querySelector('.jsModalClose')
const container = document.querySelector('.modal-container')

toggleButton.addEventListener('click', _ => {
  document.body.classList.add('modal-is-open')
})

closeButton.addEventListener('click', _ => {
  document.body.classList.remove('modal-is-open')
})

container.addEventListener('click', e => {
  if (!e.target.closest('.modal')) {
    document.body.classList.remove('modal-is-open')
  }
})
