/* globals google */
/* eslint-disable no-new  */
const places = {
  artScienceMuseum: {
    latlng: { lat: 1.2863, lng: 103.8593 },
    addr: '6 Bayfront Ave, Singapore 018974'
  },
  gardensByTheBay: {
    latlng: { lat: 1.2816, lng: 103.8636 },
    addr: '18 Marina Gardens Dr, Singapore 018953'
  },
  littleIndia: {
    latlng: { lat: 1.3066, lng: 103.8518 },
    addr: 'Little India, Singapore'
  },
  sentosa: {
    latlng: { lat: 1.2494, lng: 103.8303 },
    addr: 'Sentosa, Singapore'
  },
  singaporeZoo: {
    latlng: { lat: 1.4043, lng: 103.7930 },
    addr: '80 Mandai Lake Rd, Singapore 729826'
  }
}

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

function initMap () {
  const mapDiv = document.querySelector('#map')
  const map = new google.maps.Map(mapDiv, {
    center: { lat: 1.3521, lng: 103.8198 },
    zoom: 13
  })

  const directionsService = new google.maps.DirectionsService()
  const request = {
    origin: places.singaporeZoo.latlng,
    destination: places.sentosa.addr,
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
}

fetchWithJSONP(gmapsURI, initMap)
