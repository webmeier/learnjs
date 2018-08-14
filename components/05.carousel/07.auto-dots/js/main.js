// # START EDITING YOUR JAVASCRIPT HERE
// ===============
const getCurrentIndex = slides =>
  slides.findIndex(
    slide => slide.classList.contains('is-selected')
  )

const makeDots = (carousel, slides) => {
  const container = document.createElement('div')
  container.classList.add('carousel__nav')

  slides.forEach(slide => {
    const dot = document.createElement('button')
    dot.classList.add('carousel__dot')
    if (slide.classList.contains('is-selected')) {
      dot.classList.add('is-selected')
    }

    container.appendChild(dot)
  })

  carousel.appendChild(container)
  return container
}

const moveToSlide = (track, slides, currentIndex, targetIndex) => {
  const currentSlide = slides[currentIndex]
  const targetSlide = slides[targetIndex]

  track.style.transform = `translateX(-${targetSlide.style.left})`
  currentSlide.classList.remove('is-selected')
  targetSlide.classList.add('is-selected')
}

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px'
}

const showHideArrows = (slides, prevButton, nextButton, targetIndex) => {
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

const updateDots = (dots, currentIndex, targetIndex) => {
  const currentDot = dots[currentIndex]
  const targetDot = dots[targetIndex]
  currentDot.classList.remove('is-selected')
  targetDot.classList.add('is-selected')
}

const carousel = document.querySelector('.carousel')
const track = carousel.querySelector('.carousel__track')
const slides = [...track.children]
const slideWidth = slides[0].getBoundingClientRect().width

makeDots(carousel, slides)

const dotsContainer = document.querySelector('.carousel__nav')
const dots = [...dotsContainer.children]
const nextButton = document.querySelector('.jsNext')
const prevButton = document.querySelector('.jsPrev')

slides.forEach(setSlidePosition)

// Next button event listener
nextButton.addEventListener('click', e => {
  const currentIndex = getCurrentIndex(slides)
  const nextIndex = currentIndex + 1

  moveToSlide(track, slides, currentIndex, nextIndex)
  showHideArrows(slides, prevButton, nextButton, nextIndex)
  updateDots(dots, currentIndex, nextIndex)
})

// previous button event listener
prevButton.addEventListener('click', e => {
  const currentIndex = getCurrentIndex(slides)
  const prevIndex = currentIndex - 1

  moveToSlide(track, slides, currentIndex, prevIndex)
  showHideArrows(slides, prevButton, nextButton, prevIndex)
  updateDots(dots, currentIndex, prevIndex)
})

dotsContainer.addEventListener('click', e => {
  const targetDot = e.target.closest('button')
  if (!targetDot) return

  const currentIndex = getCurrentIndex(slides)
  const targetIndex = dots.findIndex(dot => dot === targetDot)

  moveToSlide(track, slides, currentIndex, targetIndex)
  showHideArrows(slides, prevButton, nextButton, targetIndex)
  updateDots(dots, currentIndex, targetIndex)
})
