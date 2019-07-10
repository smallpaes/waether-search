const express = require('express')
const app = express()

const port = 3000

// given path to serve static files
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('landing page')
})

app.listen(port, () => {
  console.log(`Express is listening on http://localhost/${port}`)
})