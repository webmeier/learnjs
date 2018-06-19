/* globals getComputedStyle */
// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const createPopover = trigger => {
  const popover = document.createElement('div')
  popover.classList.add('popover')
  popover.textContent = trigger.dataset.text
  popover.dataset.placement = trigger.dataset.placement
  return popover
}

const getFontSizeInPx = node => parseFloat(getComputedStyle(node).fontSize)

const getPopoverPos = (trigger, popover) => {
  const em = getFontSizeInPx(popover)
  const spaceForArrow = 1.25 * em
  const triggerRect = trigger.getBoundingClientRect()
  const popoverRect = popover.getBoundingClientRect()
  const { placement } = popover.dataset

  if (placement === 'top') {
    return {
      left: triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2,
      top: triggerRect.top - popoverRect.height - spaceForArrow
    }
  }

  if (placement === 'right') {
    return {
      left: triggerRect.right + spaceForArrow,
      top: triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2
    }
  }

  if (placement === 'bottom') {
    return {
      left: triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2,
      top: triggerRect.bottom + spaceForArrow
    }
  }

  if (placement === 'left') {
    return {
      left: triggerRect.left - popoverRect.width - spaceForArrow,
      top: triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2
    }
  }
}

// From https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
const generateId = _ =>
  Math.random().toString(36).substring(7)

const displayPopover = (trigger) => {
  const { target } = trigger.dataset
  let popover = ''

  if (target) {
    popover = document.querySelector(`#${target}`)
    popover.dataset.placement = trigger.dataset.placement
  } else {
    popover = createPopover(trigger)
    const id = generateId()
    trigger.dataset.target = id
    popover.id = id

    document.body.appendChild(popover)
  }

  const { left, top } = getPopoverPos(trigger, popover)
  popover.style.transform = `translate3d(${left}px, ${top}px, 0)`
  popover.style.opacity = 1
}

const hidePopover = (trigger) => {
  const { target } = trigger.dataset
  const popover = document.querySelector(`#${target}`)
  popover.style.opacity = 0
}

const triggers = document.querySelectorAll('[data-popover]')

triggers.forEach(trigger => {
  trigger.addEventListener('click', e => {
    const popoverDisplayed = e.target.dataset.popoverDisplayed === 'true'

    popoverDisplayed
      ? hidePopover(trigger)
      : displayPopover(trigger)

    e.target.dataset.popoverDisplayed = !popoverDisplayed
  })
})
