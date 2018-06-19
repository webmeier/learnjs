const calcPopoverPos = (trigger, popover) => {
  const triggerRect = trigger.getBoundingClientRect()
  const popoverRect = popover.getBoundingClientRect()
  const placement = popover.dataset.placement
  const space = 20

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

const triggers = [...document.querySelectorAll('.trigger')]

triggers.forEach(trigger => {
  const popover = document.querySelector(`#${trigger.dataset.target}`)
  const popoverPos = calcPopoverPos(trigger, popover)
  popover.style.left = `${popoverPos.left}px`
  popover.style.top = `${popoverPos.top}px`

  trigger.addEventListener('click', e => {
    popover.classList.toggle('is-displayed')
  })
})
