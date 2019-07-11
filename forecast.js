const request = require('request')

const forecast = (longitude, latitude, callback) => {
  const url = `https://api.darksky.net/forecast/25b16bf9e3a222edb357629cfd36cc52/${latitude},${longitude}?units=si`

  request({ url, json: true }, (error, { body }) => {
    if (error) { return callback('Unable to connect to weather server', undefined) }
    // invalid input
    if (body.error) { return callback('Unable to find location', undefined) }
    // valid input with no error response
    const current = body.currently
    callback(undefined, `${body.daily.data[0].summary} It is currently ${current.temperature} degree. There is a ${current.precipProbability * 100}% chance of rain.`
    )
  })
}

module.exports = forecast