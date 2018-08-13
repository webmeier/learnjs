/* globals TimelineMax Back */
// # START EDITING YOUR JAVASCRIPT HERE
// ===============
const wave = _ => {
  const hand = document.querySelector('.wave-hand')
  const tl = new TimelineMax({})

  tl.set(hand, { transformOrigin: 'bottom center' })
  tl.from(hand, 0.5, {
    scale: 0.5,
    opacity: 0,
    ease: Back.easeOut.config(1.5)
  })
  tl.to(hand, 0.2, { rotation: 15 })
  tl.to(hand, 0.2, { rotation: -15 })
  tl.to(hand, 0.2, { rotation: 15 })
  tl.to(hand, 0.2, { rotation: -15 })
  tl.to(hand, 0.2, { rotation: 0 })
}

const openModal = _ => {
  document.body.classList.add('modal-is-open')
}

const closeModal = e => {
  document.body.classList.remove('modal-is-open')
}

const toggleButton = document.querySelector('.jsModalToggle')
const closeButton = document.querySelector('.jsModalClose')
const container = document.querySelector('.modal-container')

toggleButton.addEventListener('click', e => {
  openModal()
  wave()
})

closeButton.addEventListener('click', e => {
  closeModal()
})

container.addEventListener('click', e => {
  if (!e.target.closest('.modal')) closeModal()
})
