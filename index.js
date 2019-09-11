const express = require('express')
const app = express()

const cors = require('cors')
const corsMiddleware = cors()

const bodyparser = require('body-parser')
const parseMiddleware = bodyparser.json()

const db = require('./db')
const Advertisement = require('./advertisement/model')
const router = require('./advertisement/router')
const port = 4000

app.use(parseMiddleware)
app.use(corsMiddleware)
app.use(db)
app.use(Advertisement)
app.use(router)

app.get('/test', (req, res) => res.send('Hello test!!'))
app.listen(port, () => console.log(`Listening on port ${port}`))