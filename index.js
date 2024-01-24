const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => {
  res.send('Good Day!')
})

app.get('/api', (req, res) => {
  res.send('Production is always LIVE!!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
