/* globals TimelineMax Back */
// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const toggleButton = document.querySelector('.jsModalToggle')
const closeButton = document.querySelector('.jsModalClose')
const container = document.querySelector('.modal-container')
const hand = document.querySelector('.wave-hand')

const wave = _ => {
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
  wave()
}

const closeModal = e => {
  if (e.target === closeButton) {
    document.body.classList.remove('modal-is-open')
  }

  if (!e.target.closest('.modal')) {
    document.body.classList.remove('modal-is-open')
  }
}

toggleButton.addEventListener('click', openModal)
closeButton.addEventListener('click', closeModal)
container.addEventListener('click', closeModal)
