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

const initAutocompleteFields = (map, searchFields) => {
  searchFields.forEach(el => {
    const autocomplete = new google.maps.places.Autocomplete(el, {
      fields: ['formatted_address']
    })
    autocomplete.bindTo('bounds', map)
    el.autocompleteWidget = autocomplete
  })
}

const getFormattedAddress = (searchFields, index) => {
  const place = searchFields[index].autocompleteWidget.getPlace()

  // Place is valid only if place has `formatted_address`.
  // Required checks because we don't control code for Google's Autocomplete widget
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

const createDestinationBox = index => {
  const div = document.createElement('div')
  div.classList.add('controls__search-box')
  div.innerHTML = ` <label class="is-invisible" for="destination-${index}">Destination ${index}</label>
    <input
      type="search"
      id="destination-${index}"
      name="destination-${index}"
      placeholder="Choose destination ${index}"
    />
    <span class="control__icon"></span>
  `
  return div
}

const getWaypoints = searchFields =>
  searchFields
    .map((el, index) => ({
      location: getFormattedAddress(searchFields, index),
      stopover: false
    }))
    .filter((el, index) => index !== 0 && index !== searchFields.length - 1)

function initMap () {
  const mapDiv = document.querySelector('#map')
  const map = new google.maps.Map(mapDiv, {
    center: { lat: 1.3521, lng: 103.8198 },
    zoom: 13
  })

  const form = document.querySelector('form')
  const newDestinationButton = form.querySelector('.secondary')
  const searchFields = [...form.querySelectorAll('input')]

  initAutocompleteFields(map, searchFields)

  newDestinationButton.addEventListener('click', evt => {
    const searchFields = form.querySelectorAll('input')
    const numFields = searchFields.length
    const index = numFields

    const div = document.createElement('div')
    div.classList.add('controls__search-box')
    div.innerHTML = `
      <label class="is-invisible" for="destination-${index}">Destination ${index}</label>
      <input
        type="search"
        id="destination-${index}"
        name="destination-${index}"
        placeholder="Choose destination ${index}"
      />
      <span class="control__icon"></span>
    `

    const refNode = form.querySelector('.controls__buttons')
    const parent = refNode.parentNode
    parent.insertBefore(div, refNode)

    const searchField = div.querySelector('input')
    const autocomplete = new google.maps.places.Autocomplete(searchField, {
      fields: ['formatted_address']
    })
    autocomplete.bindTo('bounds', map)
    searchField.autocompleteWidget = autocomplete
  })

  form.addEventListener('submit', evt => {
    evt.preventDefault()

    const searchFields = [...form.querySelectorAll('input')]

    const request = {
      origin: getFormattedAddress(searchFields, 0),
      destination: getFormattedAddress(searchFields, searchFields.length - 1),
      waypoints: getWaypoints(searchFields),
      travelMode: 'DRIVING'
    }

    updateSearchFields(searchFields)
    drawDirections(map, request)
  })
}

fetchWithJSONP(gmapsURI, initMap)
