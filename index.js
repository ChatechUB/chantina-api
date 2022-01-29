const express = require('express')
const getWeek = require('./getWeek')
const app = express()
const port = 3000
var cors = require('cors')

app.use(cors())

app.get('/getWeek', (req, res)=> {
    getWeek(req, res)
})

app.get('/', (req, res) => {
  res.send('chantina.no!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
