/* globals google */
/* eslint-disable no-new  */
// # Start editing your JavaScript here
// ===============

// Please change this to use your own API key!
const apiKey = 'AIzaSyBOSppjMrbl5YQAUla6O9WNAL1w2zeWtLc'
const gmapsURI = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`

const fetchWithJSONP = (uri, callback, err = console.error) => {
  const script = document.createElement('script')
  const prefix = uri.indexOf('?' + 1) ? '&' : '?'

  if (typeof callback !== 'function') throw Error('callback must be a function')
  if (typeof err !== 'function') throw Error('err must be a function')

  script.src = `${uri}${prefix}callback=${callback.name}`
  document.body.appendChild(script)
  document.body.removeChild(script)
  script.addEventListener('error', err)
}

function initMap () {
  const mapDiv = document.querySelector('#map')
  const map = new google.maps.Map(mapDiv, {
    center: { lat: 1.3521, lng: 103.8198 },
    zoom: 13
  })

  const form = document.querySelector('form')
  const searchFields = [...form.querySelectorAll('input')]

  searchFields.forEach(el => {
    const autocomplete = new google.maps.places.Autocomplete(el, {
      fields: ['formatted_address']
    })
    autocomplete.bindTo('bounds', map)
    el.autocompleteWidget = autocomplete
  })

  form.addEventListener('submit', async evt => {
    evt.preventDefault()

    let origin = searchFields[0].autocompleteWidget.getPlace()
    let destination = searchFields[1].autocompleteWidget.getPlace()

    if (typeof origin !== 'object' || !origin.formatted_address) {
      const dropdown = document.querySelectorAll('.pac-container')[0]
      const queryEl = dropdown.querySelector('.pac-item-query')
      const queryText = queryEl.innerHTML
        .replace('<span class="pac-matched">', '')
        .replace('</span>', '')
      const street = queryEl.nextElementSibling.textContent
      const address = `${queryText}, ${street}`
      origin = { formatted_address: address }
      searchFields[0].value = address
    }

    if (typeof destination !== 'object' || !destination.formatted_address) {
      const dropdown = document.querySelectorAll('.pac-container')[1]
      const queryEl = dropdown.querySelector('.pac-item-query')
      const queryText = queryEl.innerHTML
        .replace('<span class="pac-matched">', '')
        .replace('</span>', '')
      const street = queryEl.nextElementSibling.textContent
      const address = `${queryText}, ${street}`
      destination = { formatted_address: address }
      searchFields[1].value = address
    }

    const directionsService = new google.maps.DirectionsService()
    const request = {
      origin: origin.formatted_address,
      destination: destination.formatted_address,
      travelMode: 'DRIVING'
    }

    directionsService.route(request, (result, status) => {
      if (status === 'OK') {
        new google.maps.DirectionsRenderer({
          map,
          directions: result
        })
      } else {
        console.error(status)
        console.log(result)
      }
    })
  })
}

fetchWithJSONP(gmapsURI, initMap)
