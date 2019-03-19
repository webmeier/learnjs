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
}

zlFetch(`https://api.opendota.com/api/heroStats`)
  .then(init)
  .catch(console.log)
