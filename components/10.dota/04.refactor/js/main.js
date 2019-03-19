/* globals DOMPurify zlFetch */
// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const dotaApi = 'https://api.opendota.com/api'

const init = data => {
  const heroes = data.body.map(hero => {
    return {
      name: hero['localized_name'],
      primaryAttr: hero['primary_attr'].toLowerCase(),
      attackType: hero['attack_type'].toLowerCase(),
      roles: hero.roles.map(role => role.toLowerCase()),
      img: `https://api.opendota.com${hero.img}`
    }
  })

  renderHeroes(heroes)

  const filters = document.querySelector('.filters')
  filters.addEventListener('change', _ => {
    renderHeroes(filterHeroes(heroes))
  })
}

const renderHeroes = heroes => {
  const innerHTML = heroes.map(hero => {
    return `<div class="hero">
      <img src="${hero.img}" />
      <div class="hero__name">${hero.name}</div>
    </div>`
  }).join('')

  const heroesDiv = document.querySelector('.heroes')
  heroesDiv.innerHTML = DOMPurify.sanitize(innerHTML)
}

const filterHeroes = heroes => {
  const filter1 = filterByPrimaryAttribute(heroes)
  const filter2 = filterByAttackType(filter1)
  return filterByRoles(filter2)
}

const filterByPrimaryAttribute = heroes => {
  const selectedAttributes = Array.from(
    document.querySelector('#primary-attribute')
      .querySelectorAll(('input:checked'))
  ).map(el => el.id)

  if (!selectedAttributes.length) return heroes
  return heroes.filter(hero => {
    return selectedAttributes.includes(hero.primaryAttr)
  })
}

const filterByAttackType = heroes => {
  const selectedAttackTypes = Array.from(
    document.querySelector('#attack-type')
      .querySelectorAll(('input:checked'))
  ).map(el => el.id)

  if (!selectedAttackTypes.length) return heroes
  return heroes.filter(hero => {
    return selectedAttackTypes.includes(hero.attackType)
  })
}

const filterByRoles = heroes => {
  const selectedRoles = Array.from(
    document.querySelector('#roles')
      .querySelectorAll(('input:checked'))
  ).map(el => el.id)

  return heroes.filter(hero => {
    return selectedRoles.every(selectedRole => {
      return hero.roles.includes(selectedRole)
    })
  })
}

zlFetch(`${dotaApi}/heroStats`)
  .then(init)
  .catch(console.log)
