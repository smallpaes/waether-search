const request = require('request')

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibG92ZXNtYWxscGFlcyIsImEiOiJjand4OG83ZjQwanVsNDlzM2VrbHk1NXA2In0.ZQ1h7u8qZohyoAbwywGqAQ&limit=1`

  request({ url, json: true }, (error, { body }) => {
    if (error) { return callback('Unable to connect to location services', undefined) }
    // invalid input
    if (body.features.length === 0) { return callback('Unable to find this location, try again!', undefined) }
    // valid input and no error response
    const { features } = body
    callback(undefined, {
      longitude: features[0].center[0],
      latitude: features[0].center[1],
      location: features[0].place_name
    })
  })
}

module.exports = geocode