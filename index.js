const express = require('express')
const app = express()
const port = 3001

app.get('/hammad', (req, res) => {
  res.send('Hello World for checking')
})
app.get('/about', (req, res) => {
    res.send('this is about page')
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})