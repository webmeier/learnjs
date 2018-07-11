/* globals getComputedStyle */
const calcPopoverPos = (trigger, popover) => {
  const triggerRect = trigger.getBoundingClientRect()
  const popoverRect = popover.getBoundingClientRect()
  const placement = popover.dataset.placement
  const space = getOneEm(trigger) * 1.2

  if (placement === 'top') {
    return {
      left: (triggerRect.left + triggerRect.right) / 2 - popoverRect.width / 2,
      top: triggerRect.top - popoverRect.height - space
    }
  }

  if (placement === 'bottom') {
    return {
      left: (triggerRect.left + triggerRect.right) / 2 - popoverRect.width / 2,
      top: triggerRect.bottom + space
    }
  }

  if (placement === 'right') {
    return {
      left: triggerRect.right + space,
      top: (triggerRect.top + triggerRect.bottom) / 2 - popoverRect.height / 2
    }
  }

  if (placement === 'left') {
    return {
      left: triggerRect.left - popoverRect.width - space,
      top: (triggerRect.top + triggerRect.bottom) / 2 - popoverRect.height / 2
    }
  }
}

const getOneEm = element => {
  const style = getComputedStyle(element)
  return parseInt(style.fontSize)
}

const getPopover = trigger => {
  const target = trigger.dataset.target
  return target
    ? document.querySelector(`#${target}`)
    : makePopover(trigger)
}

const makePopover = trigger => {
  const { content, placement } = trigger.dataset
  const popover = document.createElement('div')
  popover.classList.add('popover')
  popover.dataset.placement = placement
  popover.innerHTML = `<p>${content}</p>`

  document.body.appendChild(popover)
  return popover
}

const triggers = [...document.querySelectorAll('.trigger')]

triggers.forEach(trigger => {
  const popover = getPopover(trigger)
  const popoverPos = calcPopoverPos(trigger, popover)
  popover.style.left = `${popoverPos.left}px`
  popover.style.top = `${popoverPos.top}px`

  trigger.addEventListener('click', e => {
    popover.classList.toggle('is-displayed')
  })
})
