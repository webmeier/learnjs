// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const toggleButton = document.querySelector('.jsModalToggle')
const closeButton = document.querySelector('.jsModalClose')
const overlay = document.querySelector('.jsModalContainer')
const modal = document.querySelector('.jsModal')

const openModal = _ => document.body.classList.add('modal-is-open')
const closeModal = _ => document.body.classList.remove('modal-is-open')

toggleButton.addEventListener('click', openModal)
modal.addEventListener('click', e => e.stopPropagation())
overlay.addEventListener('click', closeModal)
closeButton.addEventListener('click', closeModal)
