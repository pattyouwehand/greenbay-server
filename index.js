const express = require('express')
const app = express()
const port = process.env.PORT || 4000
//const bodyparser = bodyparser.json()
const db = require('./db')

//app.use(jsonParser)

app.listen(port, () => console.log(`Listening on port ${port}`))