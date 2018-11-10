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

  // map.addListener('idle', _ => {
  //   const autocompleteService = new google.maps.places.AutocompleteService(map)
  //   autocompleteService.getPlacePredictions({
  //     input: 'tou',
  //     fields: ['formatted_address', 'geometry'],
  //     bounds: map.getBounds()
  //   }, (result, status) => {
  //     console.log('getting results')
  //     console.log(status, result)
  //     console.table(result)
  //   })
  // })

  // const form = document.querySelector('form')
  // const inputFields = [...form.querySelectorAll('input')]

  // inputFields.forEach(el => {
  //   const autocomplete = new google.maps.places.Autocomplete(el, {
  //     fields: ['formatted_address', 'geometry']
  //   })
  //   autocomplete.bindTo('bounds', map)
  //   el.autocompleteWidget = autocomplete
  // })

  // form.addEventListener('submit', async evt => {
  //   evt.preventDefault()

  //   let start = inputFields[0].autocompleteWidget.getPlace()
  //   let end = inputFields[1].autocompleteWidget.getPlace()

  //   // if (typeof start !== 'object' || !start.formatted_address) {
  //   //   const dropdown = document.querySelectorAll('.pac-container')[0]
  //   //   const queryEl = dropdown.querySelector('.pac-item-query')
  //   //   const search = queryEl.innerHTML.replace('<span class="pac-matched">', '')
  //   //     .replace('</span>', '')
  //   //   const country = queryEl.nextElementSibling.textContent
  //   //   const address = `${search}, ${country}`
  //   //   start = { formatted_address: address }
  //   //   inputFields[0].value = address
  //   // }

  //   // if (typeof end !== 'object' || !end.formatted_address) {
  //   //   const dropdown = document.querySelectorAll('.pac-container')[1]
  //   //   const queryEl = dropdown.querySelector('.pac-item-query')
  //   //   const search = queryEl.innerHTML.replace('<span class="pac-matched">', '')
  //   //     .replace('</span>', '')
  //   //   const country = queryEl.nextElementSibling.textContent
  //   //   const address = `${search}, ${country}`
  //   //   end = { formatted_address: address }
  //   //   inputFields[1].value = address
  //   // }

  //   // Todo: Show error messages in the UI
  //   if (!start) throw Error('Please enter a starting location')
  //   if (!end) throw Error('Please enter a destination')

  //   const directionsService = new google.maps.DirectionsService()
  //   const request = {
  //     origin: start.formatted_address,
  //     destination: end.formatted_address,
  //     travelMode: 'DRIVING'
  //   }

  //   directionsService.route(request, (result, status) => {
  //     if (status === 'OK') {
  //       new google.maps.DirectionsRenderer({
  //         map,
  //         directions: result
  //       })
  //     } else {
  //       console.error(status)
  //       console.log(result)
  //     }
  //   })
  // })
}

fetchWithJSONP(gmapsURI, initMap)

// const getFirstAddressFromDropdown = (dropdown) => {
//   const queryElement = dropdown.querySelector('.pac-item-query')
//   const queryText = queryElement.innerHTML
//     .replace('<span class="pac-matched">', '')
//     .replace('</span>', '')
//   const country = queryElement.nextElementSibling.textContent
//   return `${search}, ${country}`
// }

// const isValidPlace = place =>
//   typeof start === 'object' && start.formatted_address

// const formattedAddress = place => {
//   return isValidPlace(place)
//     ? place.formatted_address
//     : getFirstAddressFromDropdown(place.index)
//     // Never mind
//     // But how should I do the formatting? To clean up...
//     // Cos need to add the thing... if not valid place, need to format...
//     // And I want to make sure the change is explicit.
// }

// From the name, sounds like it's going to make some side effects. So it's probably fine...
