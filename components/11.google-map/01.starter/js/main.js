/* globals google */
/* eslint-disable no-new  */

// # Start editing your JavaScript here
// ===============

function initMap () {
  const mapDiv = document.querySelector('#map')
  new google.maps.Map(mapDiv, {
    center: { lat: 1.3521, lng: 103.8198 },
    zoom: 13
  })
}
