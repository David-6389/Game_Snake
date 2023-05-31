// Server with nodemon
const express = require('express')

const app = express()
const port = 4000

console.log("Starting Server...");

app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})