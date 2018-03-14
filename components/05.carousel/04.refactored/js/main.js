// # START EDITING YOUR JAVASCRIPT HERE
// ===============
const track = document.querySelector('.jsTrack')
const slides = Array.from(track.children)
const nextButton = document.querySelector('.jsNext')
const previousButton = document.querySelector('.jsPrevious')
const dotContainer = document.querySelector('.jsDotContainer')
const dots = Array.from(dotContainer.children)

const slideWidth = slides[0].getBoundingClientRect().width

slides.forEach((slide, index) => {
  slide.style.left = index * slideWidth + `px`
})

const getCurrentIndex = _ =>
  slides.findIndex(slide => slide.classList.contains('is-selected'))

const updateSlides = (currentIndex, targetIndex) => {
  const currentSlide = slides[currentIndex]
  const targetSlide = slides[targetIndex]
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
  currentSlide.classList.remove('is-selected')
  targetSlide.classList.add('is-selected')
}

const updateDots = (currentIndex, targetIndex) => {
  dots[currentIndex].classList.remove('is-selected')
  dots[targetIndex].classList.add('is-selected')
}

const updateArrows = targetIndex => {
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
}

const nextSlide = e => {
  const currentIndex = getCurrentIndex(slides)
  const nextIndex = currentIndex + 1

  updateSlides(currentIndex, nextIndex)
  updateDots(currentIndex, nextIndex)
  updateArrows(nextIndex)
}

const previousSlide = e => {
  const currentIndex = getCurrentIndex(slides)
  const previousIndex = currentIndex - 1

  updateSlides(currentIndex, previousIndex)
  updateDots(currentIndex, previousIndex)
  updateArrows(previousIndex)
}

const setSlide = e => {
  if (!e.target.matches('button')) return

  const currentIndex = getCurrentIndex(slides)
  const targetIndex = dots.findIndex(dot => dot === e.target)

  updateSlides(currentIndex, targetIndex)
  updateDots(currentIndex, targetIndex)
  updateArrows(targetIndex)
}

nextButton.addEventListener('click', nextSlide)
previousButton.addEventListener('click', previousSlide)
dotContainer.addEventListener('click', setSlide)
