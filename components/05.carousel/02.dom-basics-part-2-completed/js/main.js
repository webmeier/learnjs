// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const track = document.querySelector('.carousel__track')
const slides = Array.from(track.children)
const slideWidth = slides[0].getBoundingClientRect().width
const dotsContainer = document.querySelector('.carousel__nav')
const dots = Array.from(dotsContainer.children)

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
  const amountToMove = nextSlide.style.left
  track.style.left = '-' + amountToMove
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
  const amountToMove = prevSlide.style.left
  track.style.left = '-' + amountToMove
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

// Listening to dots
dots.forEach(dot => {
  dot.addEventListener('click', e => {
    const currentSlide = track.querySelector('.is-selected')
    const currentDot = dotsContainer.querySelector('.is-selected')
    const targetDot = dot

    let targetIndex

    for (let index = 0; index < dots.length; index++) {
      if (dots[index] === targetDot) {
        targetIndex = index
      }
    }

    const targetSlide = slides[targetIndex]

    // Move to target slide
    const amountToMove = targetSlide.style.left
    track.style.left = '-' + amountToMove
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
})
