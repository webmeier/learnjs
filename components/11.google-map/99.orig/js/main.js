/* globals google */
/* eslint-disable no-new  */
// # START EDITING YOUR JAVASCRIPT HERE
// https://www.figma.com/file/armPCOFjdHlI3ZB5jfafwcSF/googlemultiplemaps?node-id=0%3A156
// ===============
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

// fetchWithJSONP(`${gmapsURI}&callback=initMap`)

// All of a sudden there's this error called geolocate is not defined.
// On Googling: Realized that Google wants the geolocated function.defined ni your own scope. Because they freak hell didn't do functional programming!
// (See, even Google makes mistakes! So any mistakes you make is OK!)
// Read this stack overflow: https://stackoverflow.com/questions/45061032/uncaught-referenceerror-geolocate-is-not-defined

// Step 3: Find a place and substitute places fake object with the real ones
// function initMap () {
//   let map = document.querySelector('#map')
//   map = new google.maps.Map(map, {
//     center: { lat: 1.3521, lng: 103.8198 },
//     zoom: 13
//   })

//   const controls = document.querySelector('form')
//   controls.addEventListener('focusout', async evt => {
//     const start = controls.elements.startpoint.value.trim()
//     const end = controls.elements.destination.value.trim()

//     const service = new google.maps.places.PlacesService(map)
//     console.log(start)
//   })

//   const directionsService = new google.maps.DirectionsService()

//   // Note to self: Map automatically zooms to the correct boundaries
//   // No need to change boundary by myself
//   const request = {
//     // origin: places.gardensByTheBay,
//     origin: '20 Kensington Park Rd, Singapore 557269',
//     destination: places.sentosa,
//     provideRouteAlternatives: true,
//     // waypoints: [{
//     //   location: places.singaporeZoo,
//     //   stopover: true
//     // }
//     // // {
//     // //   location: places.esplanadeMall,
//     // //   stopover: true
//     // // }
//     // ],
//     travelMode: 'DRIVING'
//   }

//   directionsService.route(request, function (result, status) {
//     console.log(status, result)
//     if (status === 'OK') {
//       const directionsDisplay = new google.maps.DirectionsRenderer({
//         map,
//         directions: result,
//         panel: document.querySelector('#panel'),
//         polylineOptions: {
//           strokeColor: '#1fb4fa',
//           strokeOpacity: 1,
//           strokeWeight: '6'
//         }
//       })

//       // const directionsDisplay2 = new google.maps.DirectionsRenderer({
//       //   map,
//       //   directions: result,
//       //   routeIndex: 1,
//       //   polylineOptions: {
//       //     strokeColor: '#aaa',
//       //     strokeOpacity: 1,
//       //     strokeWeight: '6',
//       //     zIndex: -1
//       //   }
//       // })

//       document.addEventListener('click', evt => {
//         console.log(evt)
//         console.log('docu')
//       })

//       directionsDisplay.addListener('directions_changed', evt => {
//         console.log(evt)
//         console.log('change')
//       })
//       // `directions_changed` event

//       // Things We want in panel...
//       // 1. Via 'summary'

//       // 1. Leg
//       //   1. Distance
//       //   2. Duration
//       //   3. Route name? Via X... Possible?
//       // 2. Summary: Via Summary
//     }
//   })
// }

// Directions API Reference:
// https://developers.google.com/maps/documentation/javascript/reference/directions#DirectionsRequest.provideRouteAlternatives
// fetchWithJSONP(gmapsURI, initMap)

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.

// Step 4: Autocompletion.
function initAutocomplete () {
  let map = document.querySelector('#map')
  map = new google.maps.Map(map, {
    center: { lat: 1.3521, lng: 103.8198 },
    zoom: 13
  })

  // Basically set 2 or more directions... But should I have latlng here to create directions?
  // What if I use placeID? Would it be good enough? Might be!
  const directionsService = new google.maps.DirectionsService()
  const directionsDisplay = new google.maps.DirectionsRenderer()
  directionsDisplay.setMap(map)

  const form = document.querySelector('form')
  const autocompletes = Array.from(form.querySelectorAll('input[data-type="autocomplete"]'))

  form.addEventListener('submit', evt => {
    evt.preventDefault()
  })

  autocompletes.forEach(el => {
    const autocomplete = new google.maps.places.Autocomplete(el, {
      fields: ['geometry', 'formatted_address']
    })
    autocomplete.bindTo('bounds', map)
    autocomplete.addListener('place_changed', drawDirections)

    // autocomplete.setFields(['place_id', 'geometry', 'formatted_address'])
    // // This creates priority bounds
    // autocomplete.bindTo('bounds', map)
    // Google's instances cannot be placed directly as a property.
    // This is abit strange. I can't answer why. So let's leave it here...
    // You just kinda have to expect strangeness to occur when using Google's API.
    el.props = { autocomplete }
  })

  function drawDirections () {
    const start = autocompletes[0].props.autocomplete.getPlace()
    const end = autocompletes[1].props.autocomplete.getPlace()

    const placesService = new google.maps.places.PlacesService(map)
    const theStart = placesService.findPlaceFromQuery({
      query: start.name,
      fields: ['geometry', 'formatted_address']
      // locationBias:
    })
    console.log(theStart)
    // console.log(start.geometry.location.lat(), start.geometry.location.lng())
    if (!start || !end) return

    console.log('sending request')
    // Can either use formatted_address or get latlng through functions.
    // But since we're calling latlng through functions... not sure if it'l be another extra charge... Oh it's fine... it's just returning private variables.
    const request = {
      origin: start.formatted_address,
      destination: end.formatted_address,
      travelMode: 'DRIVING'
      //   waypoints: [{
      //     location: places.singaporeIndoorStadium,
      //     stopover: true
      //   }, {
      //     location: places.esplanadeMall,
      //     stopover: true
      //   }],
    }

    directionsService.route(request, function (result, status) {
      console.log('got status!')
      if (status === 'OK') {
        console.log(status, result)
        directionsDisplay.setDirections(result)
      }
    })
  }
}

function geolocate () {
  console.log('running geolocate')
  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     var geolocation = {
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude
  //     }
  //     var circle = new google.maps.Circle({
  //       center: geolocation,
  //       radius: position.coords.accuracy
  //     })
  //     // autocomplete.setBounds(circle.getBounds())
  //   })
  // }
}

fetchWithJSONP(gmapsURI, initAutocomplete)

// So... if half fucked query, means one got autocomplete one don't have, we need to fallback to using a placesSearch. Search by Text would be good right? Have to test. Easier to test in isolation. Now, everything comes together it's pretty difficult.
// I can work on improving the rest of the program later. The styles here work well as of now.
// Note to self: Don't want to be onBlur... need to be onSubmit... This wouldn't be so distracting right? But when they random anyhow type... how?

// Step 5: Create additional things
// const initAutocomplete = function () {
//   const form = document.querySelector('form')
//   const autocompletes = Array.from(form.querySelectorAll('input[data-type="autocomplete"]'))
// }

// fetchWithJSONP(gmapsURI, initAutocomplete)
