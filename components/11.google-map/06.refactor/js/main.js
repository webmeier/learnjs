/* globals google */
/* eslint-disable no-new  */
// # Start editing your JavaScript here
// ===============

// Please change this to use your own API key!
const apiKey = 'YOUR_API_KEY'
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

const initAutocompleteFields = (map, searchFields) => {
  searchFields.forEach(el => {
    const autocomplete = new google.maps.places.Autocomplete(el, {
      fields: ['formatted_address']
    })
    autocomplete.bindTo('bounds', map)
    el.autocompleteWidget = autocomplete
  })
}

const getFormattedAddress = (fields, index) => {
  const place = fields[index].autocompleteWidget.getPlace()

  // Place is valid only if it has `formatted_address` property.
  // Check this way because Google Autocomplete Widget can sometimes return 'undefined' when getPlace is called.
  if (typeof place === 'object' && place.formatted_address) {
    return place.formatted_address
  }

  const dropdown = document.querySelectorAll('.pac-container')[index]
  const queryEl = dropdown.querySelector('.pac-item-query')
  const queryText = queryEl.innerHTML
    .replace('<span class="pac-matched">', '')
    .replace('</span>', '')
  const street = queryEl.nextElementSibling.textContent
  return `${queryText}, ${street}`
}

const updateSearchFields = searchFields => {
  searchFields.forEach((el, index) => {
    el.value = getFormattedAddress(searchFields, index)
  })
}

const drawDirections = (map, request) => {
  const directionsService = new google.maps.DirectionsService()
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
}

function initMap () {
  const mapDiv = document.querySelector('#map')
  const map = new google.maps.Map(mapDiv, {
    center: { lat: 1.3521, lng: 103.8198 },
    zoom: 13
  })

  const form = document.querySelector('form')
  const searchFields = [...form.querySelectorAll('input')]
  initAutocompleteFields(map, searchFields)

  form.addEventListener('submit', evt => {
    evt.preventDefault()

    const request = {
      origin: getFormattedAddress(searchFields, 0),
      destination: getFormattedAddress(searchFields, 1),
      travelMode: 'DRIVING'
    }

    updateSearchFields(searchFields)
    drawDirections(map, request)
  })
}

fetchWithJSONP(gmapsURI, initMap)
