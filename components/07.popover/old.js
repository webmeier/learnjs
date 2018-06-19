/* globals getComputedStyle */
// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const createPopover = origin => {
  const popover = document.createElement('div')
  popover.classList.add('popover')
  popover.textContent = origin.dataset.text
  popover.dataset.placement = origin.dataset.placement
  return popover
}

const getFontSizeInPx = node => parseFloat(getComputedStyle(node).fontSize)

const getPopoverPos = (origin, popover) => {
  const em = getFontSizeInPx(popover)
  const spaceForArrow = 1.25 * em
  const originRect = origin.getBoundingClientRect()
  const popoverRect = popover.getBoundingClientRect()
  const { placement } = popover.dataset

  if (placement === 'top') {
    return {
      left: originRect.left + originRect.width / 2 - popoverRect.width / 2,
      top: originRect.top - popoverRect.height - spaceForArrow
    }
  }

  if (placement === 'right') {
    return {
      left: originRect.right + spaceForArrow,
      top: originRect.top + originRect.height / 2 - popoverRect.height / 2
    }
  }

  if (placement === 'bottom') {
    return {
      left: originRect.left + originRect.width / 2 - popoverRect.width / 2,
      top: originRect.bottom + spaceForArrow
    }
  }

  if (placement === 'left') {
    return {
      left: originRect.left - popoverRect.width - spaceForArrow,
      top: originRect.top + originRect.height / 2 - popoverRect.height / 2
    }
  }
}

// From https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
const generateId = _ =>
  Math.random().toString(36).substring(7)

const displayPopover = (origin) => {
  const { target } = origin.dataset
  let popover = ''

  if (target) {
    popover = document.querySelector(`#${target}`)
    popover.dataset.placement = origin.dataset.placement
  } else {
    popover = createPopover(origin)
    const id = generateId()
    origin.dataset.target = id
    popover.id = id

    document.body.appendChild(popover)
  }

  const { left, top } = getPopoverPos(origin, popover)
  popover.style.transform = `translate3d(${left}px, ${top}px, 0)`
  popover.style.opacity = 1
}

const hidePopover = (origin) => {
  const { target } = origin.dataset
  const popover = document.querySelector(`#${target}`)
  popover.style.opacity = 0
}

const popoverOrigins = document.querySelectorAll('[data-popover]')

popoverOrigins.forEach(origin => {
  origin.addEventListener('click', e => {
    const popoverDisplayed = e.target.dataset.popoverDisplayed === 'true'

    popoverDisplayed
      ? hidePopover(origin)
      : displayPopover(origin)

    e.target.dataset.popoverDisplayed = !popoverDisplayed
  })
})
