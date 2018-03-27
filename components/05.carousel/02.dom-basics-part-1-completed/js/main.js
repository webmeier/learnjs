// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const track = document.querySelector('.carousel__track')
const slides = Array.from(track.children)
const slideWidth = slides[0].getBoundingClientRect().width
const dotsContainer = document.querySelector('.carouser__nav')

// Positioning slides
slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + 'px'
})

// Next button event listener
const nextButton = document.querySelector('.jsNext')
nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.is-selected')
  const nextSlide = currentSlide.nextElementSibling

  // Move to next slide
  const amountToMove = nextSlide.style.left
  track.style.left = '-' + amountToMove
  currentSlide.classList.remove('is-selected')
  nextSlide.classList.add('is-selected')

  // Update arrows
  const isFinalSlide = !nextSlide.nextElementSibling
  if (isFinalSlide) {
    nextButton.classList.add('is-hidden')
  }

  // Update dots
  const currentDot = dotsContainer.querySelector('.is-selected')
  const nextDot = currentDot.nextElementSibling
  currentDot.classList.remove('is-selected')
  nextDot.classList.add('is-selected')
})
