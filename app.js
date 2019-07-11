const express = require('express')
const exphbs = require('express-handlebars')
const request = require('request')
const geocode = require('./geocode')
const forecast = require('./forecast')

const app = express()
const port = 3000

// setup handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// given path to serve static files
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/search', (req, res) => {
  geocode(req.query.address, (error, { longitude, latitude, location } = {}) => {
    if (error) { return res.send({ error }) }
    forecast(longitude, latitude, (error, data) => {
      if (error) { return res.send({ error }) }
      res.send({
        forecast: data,
        location,
        address: req.query.address
      })
    })
  })
})

app.listen(port, () => {
  console.log(`Express is listening on http://localhost/${port}`)
})