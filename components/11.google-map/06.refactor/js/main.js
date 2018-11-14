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

const initAutocomplete = (map, el) => {
  const autocomplete = new google.maps.places.Autocomplete(el, {
    fields: ['formatted_address', 'geometry']
  })
  autocomplete.bindTo('bounds', map)
  el.autocompleteWidget = autocomplete
}

const isValidPlace = place => typeof place === 'object' && place.formatted_address

const getFormattedAddress = (fields, index) => {
  const place = fields[index].autocompleteWidget.getPlace()
  if (isValidPlace(place)) return place.formatted_address

  const dropdown = document.querySelectorAll('.pac-container')[index]
  const queryEl = dropdown.querySelector('.pac-item-query')
  const queryText = queryEl.innerHTML
    .replace('<span class="pac-matched">', '')
    .replace('</span>', '')
  const country = queryEl.nextElementSibling.textContent
  return `${queryText}, ${country}`
}

const renderAutocompleteValues = fields => {
  fields.forEach((el, index) => {
    const address = getFormattedAddress(fields, index)
    el.value = address
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
  const inputFields = [...form.querySelectorAll('input')]
  inputFields.forEach(el => initAutocomplete(map, el))

  form.addEventListener('submit', evt => {
    evt.preventDefault()

    const request = {
      origin: getFormattedAddress(inputFields, 0),
      destination: getFormattedAddress(inputFields, 1),
      travelMode: 'DRIVING'
    }

    renderAutocompleteValues(inputFields)
    drawDirections(map, request)
  })
}

fetchWithJSONP(gmapsURI, initMap)
