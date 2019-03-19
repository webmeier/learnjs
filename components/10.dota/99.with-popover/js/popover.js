const calcPopoverPos = (trigger, popover) => {
  const triggerRect = trigger.getBoundingClientRect()
  const popoverRect = popover.getBoundingClientRect()
  const placement = popover.dataset.placement
  const space = getOneEm(trigger) * 1.2

  if (placement === 'bottom') {
    return {
      left: triggerRect.left,
      top: triggerRect.bottom
    }
  }
}

const getOneEm = element => {
  const style = getComputedStyle(element)
  return parseFloat(style.fontSize)
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

// CHange trigger to filter
const triggers = [...document.querySelectorAll('.filter')]

triggers.forEach(trigger => {
  const popover = getPopover(trigger)
  const popoverPos = calcPopoverPos(trigger, popover)
  popover.style.left = `${popoverPos.left}px`
  popover.style.top = `${popoverPos.top}px`

  trigger.addEventListener('click', e => {
    popover.classList.toggle('is-displayed')
  })
})
