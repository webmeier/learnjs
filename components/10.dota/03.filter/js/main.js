/* globals DOMPurify zlFetch */
// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const dotaApi = 'https://api.opendota.com/api'

const init = data => {
  const heroesDiv = document.querySelector('.heroes')

  const innerHTML = data.body.map(hero => {
    return `<div class="hero">
      <img src="https://api.opendota.com${hero.img}" />
      <div class="hero__name">${hero['localized_name']}</div>
    </div>`
  }).join('')

  heroesDiv.innerHTML = DOMPurify.sanitize(innerHTML)

  const filters = document.querySelector('.filters')

  filters.addEventListener('change', event => {
    const primaryAttributeDiv = document.querySelector('#primary-attribute')
    const selectedAttributeEls = primaryAttributeDiv.querySelectorAll('input:checked')
    const attackTypeDiv = document.querySelector('#attack-type')
    const selectedTypeEls = attackTypeDiv.querySelectorAll('input:checked')
    const roleDiv = document.querySelector('#role')
    const selectedRoleEls = roleDiv.querySelectorAll('input:checked')

    const filteredList = data.body.filter(hero => {
      if (!selectedAttributeEls.length) return true

      const primaryAttribute = hero['primary_attr']
      // return selectedAttributeEls.some(el =>
      //   el.id === primaryAttribute
      // )

      for (const el of selectedAttributeEls) {
        return el.id === primaryAttribute
      }
    }).filter(hero => {
      if (!selectedTypeEls.length) return true
      const attackType = hero['attack_type'].toLowerCase()

      for (const el of selectedTypeEls) {
        return el.id === attackType
      }
    }).filter(hero => {
      const roles = hero.roles

      for (const el of selectedRoleEls) {
        const role = el.id.substring(0, 1).toUpperCase() + el.id.substring(1)
        if (!roles.includes(role)) return false
      }

      return true
    })

    const innerHTML = filteredList.map(hero => {
      return `<div class="hero">
      <img src="https://api.opendota.com${hero.img}" />
      <div class="hero__name">${hero['localized_name']}</div>
    </div>`
    }).join('')

    heroesDiv.innerHTML = DOMPurify.sanitize(innerHTML)
  })
}

zlFetch(`${dotaApi}/heroStats`)
  .then(init)
  .catch(console.log)
