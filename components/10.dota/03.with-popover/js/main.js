// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const dotaApi = 'https://api.opendota.com/api'
const list = document.querySelector('.heroes')

const initApp = data => {
  // Create list of heroes
  const heroes = data.body.map(hero => ({
    name: hero['localized_name'],
    primaryAttribute: hero['primary_attr'],
    roles: hero.roles,
    attackType: hero['attack_type'],
    img: `https://api.opendota.com${hero.img}`
  }))

  // Create list of unique roles
  const rolesMap = heroes.map(hero => hero.roles)
    .reduce((acc, roles) => [...acc, ...roles], [])
    .sort()
  const roles = [...new Set(rolesMap)]

  // Populate Roles Filter
  const rolesDiv = document.querySelector('#role')
  rolesDiv.innerHTML = roles.map(role => `
    <div class="filter__option">
      <input type="checkbox" id="${role.toLowerCase()}" data-role="${role.toLowerCase()}">
      <label for="${role.toLowerCase()}">
        <svg viewbox="0 0 20 15">
          <use xlink:href="#checkmark"></use>
        </svg>
        <span>${role}</span>
      </label>
    </div>
  `)
    .join('')

  // Populate Heroes List
  list.innerHTML = heroes.map(hero => {
    return `<div class="hero">
      <img src="${hero.img}" />
      <div class="hero__name">${hero.name}</div>
    </div>`
  }).join('')

  filters(heroes)
}

const filters = (heroes) => {
  const filters = document.querySelector('.filters')

  filters.addEventListener('change', event => {
    const primaryAttributeFilterDiv = document.querySelector('#primary-attribute')
    const selectedPrimaryAttributeDivs = Array.from(primaryAttributeFilterDiv.querySelectorAll('input:checked'))
    const selectedPrimaryAttributes = selectedPrimaryAttributeDivs.map(elem => elem.id)

    const attackTypeDiv = document.querySelector('#attack-type')
    const selectedAttackTypeDivs = Array.from(attackTypeDiv.querySelectorAll('input:checked'))
    const selectedAttackTypes = selectedAttackTypeDivs.map(elem => elem.id)

    const roleDiv = document.querySelector('#role')
    const selectedRolesDiv = Array.from(roleDiv.querySelectorAll('input:checked'))
    const selectedRoles = selectedRolesDiv.map(elem => elem.id)

    // Filter heroes
    const filteredHeroesList = heroes.filter(hero => {
      // Filter by attribute
      return selectedPrimaryAttributes.length
        ? selectedPrimaryAttributes.includes(hero.primaryAttribute)
        : true
    }).filter(hero => {
      return selectedAttackTypes.length
        ? selectedAttackTypes.includes(hero.attackType.toLowerCase())
        : true
    }).filter(hero => {
      return selectedRoles.length
        ? selectedRoles.every(role => {
          const titleCaseRole = role.substring(0, 1).toUpperCase() + role.substring(1).toLowerCase()
          return hero.roles.includes(titleCaseRole)
        })
        : true
    }).map(hero => {
      return `<div class="hero">
      <img src="${hero.img}" />
      <div class="hero__name">${hero.name}</div>
    </div>`
    }).join('')

    list.innerHTML = filteredHeroesList
  })
}

zlFetch(`${dotaApi}/heroStats`)
  .then(initApp)
  .catch(e => console.log(e))
