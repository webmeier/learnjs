// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const track = document.querySelector('.carousel__track')
const slides = [...track.children]
const slideWidth = slides[0].getBoundingClientRect().width
const dotsContainer = document.querySelector('.carousel__nav')
const dots = [...dotsContainer.children]
const nextButton = document.querySelector('.jsNext')
const prevButton = document.querySelector('.jsPrev')

const getCurrentIndex = slides =>
  slides.findIndex(slide => slide.classList.contains('is-selected'))

const moveToSlide = (track, slides, currentIndex, targetIndex) => {
  const currentSlide = slides[currentIndex]
  const targetSlide = slides[targetIndex]

  track.style.transform = `translateX(-${targetSlide.style.left})`
  currentSlide.classList.remove('is-selected')
  targetSlide.classList.add('is-selected')
}

const updateDots = (dots, currentIndex, targetIndex) => {
  dots[currentIndex].classList.remove('is-selected')
  dots[targetIndex].classList.add('is-selected')
}

const showHideArrows = (slides, targetIndex, prevButton, nextButton) => {
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
}

const goToNextSlide = e => {
  const currentIndex = getCurrentIndex(slides)
  const nextIndex = currentIndex + 1

  moveToSlide(track, slides, currentIndex, nextIndex)
  showHideArrows(slides, nextIndex, prevButton, nextButton)
  updateDots(dots, currentIndex, nextIndex)
}

const goToPrevSlide = e => {
  const currentIndex = getCurrentIndex(slides)
  const prevIndex = currentIndex - 1

  moveToSlide(track, slides, currentIndex, prevIndex)
  showHideArrows(slides, prevIndex, prevButton, nextButton)
  updateDots(dots, currentIndex, prevIndex)
}

const goToTargetSlide = e => {
  const targetDot = e.target.closest('button')
  if (!targetDot) return

  const currentIndex = getCurrentIndex(slides)
  const targetIndex = dots.findIndex(dot => dot === targetDot)

  moveToSlide(track, slides, currentIndex, targetIndex)
  showHideArrows(slides, targetIndex, prevButton, nextButton)
  updateDots(dots, currentIndex, targetIndex)
}
// Positioning slides
slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + 'px'
})

nextButton.addEventListener('click', goToNextSlide)
prevButton.addEventListener('click', goToPrevSlide)
dotsContainer.addEventListener('click', goToTargetSlide)
