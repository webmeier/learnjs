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

  // Update selected slide
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

  previousButton.classList.remove('is-hidden')
})

const previousButton = document.querySelector('.jsPrevious')
previousButton.addEventListener('click', e => {
  let currentSlide

  for (let slide of slides) {
    if (slide.classList.contains('is-selected')) {
      currentSlide = slide
    }
  }

  const previousSlide = currentSlide.previousElementSibling

  // Update selected slide
  const amountToMove = previousSlide.style.left
  track.style.left = '-' + amountToMove
  currentSlide.classList.remove('is-selected')
  previousSlide.classList.add('is-selected')

  // Update dots
  const dotContainer = document.querySelector('.jsDotContainer')
  const currentDot = dotContainer.querySelector('.is-selected')
  const previousDot = currentDot.previousElementSibling
  currentDot.classList.remove('is-selected')
  previousDot.classList.add('is-selected')

  // Update arrows
  const isFirstSlide = !previousSlide.previousElementSibling
  if (isFirstSlide) {
    previousButton.classList.add('is-hidden')
  }

  nextButton.classList.remove('is-hidden')
})

const dotContainer = document.querySelector('.jsDotContainer')
dotContainer.addEventListener('click', e => {
  if (!e.target.matches('button')) return

  let currentSlide

  for (let slide of slides) {
    if (slide.classList.contains('is-selected')) {
      currentSlide = slide
    }
  }

  const clickedDot = e.target
  const dots = dotContainer.children
  let targetIndex

  for (let index = 0; index < dots.length; index++) {
    if (dots[index] === clickedDot) {
      targetIndex = index
    }
  }

  const targetSlide = slides[targetIndex]

  // Update selected slideslide
  const amountToMove = targetSlide.style.left
  track.style.left = '-' + amountToMove
  currentSlide.classList.remove('is-selected')
  targetSlide.classList.add('is-selected')

  // Update dots
  const currentDot = dotContainer.querySelector('.is-selected')
  currentDot.classList.remove('is-selected')
  clickedDot.classList.add('is-selected')

  // update arrows
  if (targetIndex === 0) {
    previousButton.classList.add('is-hidden')
    nextButton.classList.remove('is-hidden')
  } else if (targetIndex === slides.length - 1) {
    previousButton.classList.remove('is-hidden')
    nextButton.classList.add('is-hidden')
  } else {
    previousButton.classList.remove('is-hidden')
    nextButton.classList.remove('is-hidden')
  }
})
