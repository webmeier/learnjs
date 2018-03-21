/* globals TimelineMax Back */

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

// Wave animation
const wave = hand => {
  const tl = new TimelineMax({})
  tl.set(hand, {transformOrigin: 'bottom center'})
  tl.from(hand, 0.5, {scale: 0.25, autoAlpha: 0, ease: Back.easeOut.config(1.5)})
  tl.to(hand, 0.25, {rotation: 15}, '+=0.05')
  tl.to(hand, 0.25, {rotation: -15})
  tl.to(hand, 0.25, {rotation: 15})
  tl.to(hand, 0.25, {rotation: -15})
  tl.to(hand, 0.25, {rotation: 0})
}

// The event listeners
const toggleButton = document.querySelector('.jsModalToggle')
const closeButton = document.querySelector('.jsModalClose')
const overlay = document.querySelector('.jsModalContainer')
const modal = document.querySelector('.jsModal')
const hand = modal.querySelector('.jsWaveHand')

const openModal = _ => {
  document.body.classList.add('modal-is-open')
  wave(hand)
}
const closeModal = _ => document.body.classList.remove('modal-is-open')

toggleButton.addEventListener('click', openModal)
modal.addEventListener('click', e => e.stopPropagation())
overlay.addEventListener('click', closeModal)
closeButton.addEventListener('click', closeModal)
