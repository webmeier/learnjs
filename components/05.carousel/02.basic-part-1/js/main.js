// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const track = document.querySelector('.jsTrack')
const slides = Array.from(track.children)
const slideWidth = slides[0].getBoundingClientRect().width
slides.forEach((slide, index) => { slide.style.left = index * slideWidth + `px` })

const nextButton = document.querySelector('.jsNext')
nextButton.addEventListener('click', e => {
  let currentSlide

  for (let slide of slides) {
    if (slide.classList.contains('is-selected')) {
      currentSlide = slide
    }
  }

  const nextSlide = currentSlide.nextElementSibling

  // Update selected slideslide
  const amountToMove = nextSlide.style.left
  track.style.left = '-' + amountToMove
  currentSlide.classList.remove('is-selected')
  nextSlide.classList.add('is-selected')

  // Update dots
  const dotContainer = document.querySelector('.jsDotContainer')
  const currentDot = dotContainer.querySelector('.is-selected')
  const nextDot = currentDot.nextElementSibling
  currentDot.classList.remove('is-selected')
  nextDot.classList.add('is-selected')

  // Update arrows
  const isFinalSlide = !nextSlide.nextElementSibling
  if (isFinalSlide) {
    nextButton.classList.add('is-hidden')
  }
})
