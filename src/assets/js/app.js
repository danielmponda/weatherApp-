/////////////////////////////////////////////////////////////////////////////////
// 01 get location cords from the local machine
window.addEventListener('load', () => {
  // console.log(navigator.geolocation)
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      glat = position.coords.latitude
      glon = position.coords.longitude

      openWeatherCoords(glat.toFixed(2), glon.toFixed(2))
    })
  } else {
  }
})

function openWeatherCoords(lat, lon) {
  fetch(
    `${method.openWeatherApi.baseurl}weather?lat=${lat}&lon=${lon}&appid=${method.openWeatherApi.key}`
  )
    // fetch(`${method.openWeatherApi.baseurl}weather?q=${query}&units=metric&APPID=${method.openWeatherApi.key}`)
    .then(function (weather) {
      return weather.json()
    })
    .then(displayResults)
}

// Get Input Search and Add keypress EventListener
let searchBtn = null
searchBtn = document.querySelector('.search-btn')
searchBtn.addEventListener('click', searchGetResults)

function searchGetResults() {
  // alert(searchinput.value);
  let query = searchinput.value
  query
    ? fetch(
        `${method.openWeatherApi.baseurl}weather?q=${query}&units=metric&APPID=${method.openWeatherApi.key}`
      )
        .then(function (weather) {
          return weather.json()
        })
        .then(displayResults)
    : ''
}
