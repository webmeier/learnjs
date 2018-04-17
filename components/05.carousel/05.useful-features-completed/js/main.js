// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const track = document.querySelector('.carousel__track')
const slides = [...track.children]
const slideWidth = slides[0].getBoundingClientRect().width
const dotsContainer = document.querySelector('.carousel__nav')
const dots = [...dotsContainer.children]

// Positioning slides
slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + 'px'
})

const nextButton = document.querySelector('.jsNext')
const prevButton = document.querySelector('.jsPrev')

// Next button event listener
nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.is-selected')
  const nextSlide = currentSlide.nextElementSibling

  // Move to next slide
  track.style.transform = `translateX(-${nextSlide.style.left})`
  currentSlide.classList.remove('is-selected')
  nextSlide.classList.add('is-selected')

  // Update arrows
  prevButton.classList.remove('is-hidden')
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

// previous button event listener
prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.is-selected')
  const prevSlide = currentSlide.previousElementSibling

  // Move to prev slide
  track.style.transform = `translateX(-${prevSlide.style.left})`
  currentSlide.classList.remove('is-selected')
  prevSlide.classList.add('is-selected')

  // Update arrows
  nextButton.classList.remove('is-hidden')
  const isFirstSlide = !prevSlide.previousElementSibling
  if (isFirstSlide) {
    prevButton.classList.add('is-hidden')
  }

  // Update dots
  const currentDot = dotsContainer.querySelector('.is-selected')
  const prevDot = currentDot.previousElementSibling
  currentDot.classList.remove('is-selected')
  prevDot.classList.add('is-selected')
})

dotsContainer.addEventListener('click', e => {
  const targetDot = e.target.closest('button')
  if (!targetDot) return

  const currentSlide = track.querySelector('.is-selected')
  const currentDot = dotsContainer.querySelector('.is-selected')
  const targetIndex = dots.findIndex(dot => dot === targetDot)
  const targetSlide = slides[targetIndex]

  // Move to target slide
  track.style.transform = `translateX(-${targetSlide.style.left})`
  currentSlide.classList.remove('is-selected')
  targetSlide.classList.add('is-selected')

  // Update dots
  currentDot.classList.remove('is-selected')
  targetDot.classList.add('is-selected')

  // Update arrows
  if (targetIndex === 0) {
    prevButton.classList.add('is-hidden')
    nextButton.classList.remove('is-hidden')
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove('is-hidden')
    nextButton.classList.add('is-hidden')
  } else {
    prevButton.classList.remove('is-hidden')
    nextButton.classList.remove('is-hidden')
  }
})
