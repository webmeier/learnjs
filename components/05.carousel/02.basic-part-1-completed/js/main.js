// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const track = document.querySelector('.carousel__track')
const slides = track.querySelectorAll('li')

const nextButton = document.querySelector('.jsNext')
nextButton.addEventListener('click', e => {
  let currentIndex

  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i]
    if (slide.classList.contains('is-selected')) {
      currentIndex = i
    }
  }

  const currentSlide = slides[currentIndex]
  const nextSlide = slides[currentIndex + 1]

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
