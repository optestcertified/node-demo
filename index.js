const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => {
  res.send('Welcome it works!')
})

app.get('/api', (req, res) => {
  res.send('Api is LIVE!!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
