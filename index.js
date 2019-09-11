const express = require('express')
const app = express()
const cors = require('cors')
const middleware = cors()
const bodyParser = require('body-parser')

const db = require('./db')
const Advertisement = require('./advertisement/model')
const router = require('./advertisement/router')
const port = 4000

app.use(bodyParser.json())
app.use(middleware)

app.use(router)

db
  .sync({ force: false })
  .then(() => console.log('Database schema updated'))
  .then(() => Promise.all([
    Advertisement.create(
      { title: 'Spathiphyllum',
        price: 20,
        description: `In addition to its exotic appearance, Lilly also has a strong air-purifying property.`,
        category: 'oxygen plant',
        picture: 'https://cdn.shopify.com/s/files/1/0761/9483/products/spathiphyllum-17-productpage_1024x1024.png?v=1567172976',
        email: 'fred@branche.com',
        phonenumber: '0613473913'
    }),
    Advertisement.create(
      { title: 'Alfredo',
        price: 25,
        description: `Alfredo is originally a Monstera Deliciosa, but is often referred to as the "Hole Plant"
                     in the Netherlands.`,
        category: 'oxygen plant',
        picture: 'https://cdn.shopify.com/s/files/1/0761/9483/products/Monstera-Deliciosa-21-leaves_1024x1024.png?v=1567183148',
        email: 'fred@branche.com',
        phonenumber: '0613473913'
    }),
    Advertisement.create(
      { title: 'Dypsis',
        price: 25,
        description: `Marty is of the Areca species and comes from Africa. To really come into its own, he needs a lot of 
                     sunlight and water. `,
        category: 'oxygen plant',
        picture: 'https://cdn.shopify.com/s/files/1/0761/9483/products/areca-21-productpage_1024x1024.png?v=1567178210',
        email: 'fred@branche.com',
        phonenumber: '0613473913'
    }),
  ]))
  .catch(console.error)

app.post('/advertisement', (req, res) => {
  res.json({message: "Loading"})
})

app.get('/test', (req, res) => res.send('Hello test!!'))
app.listen(port, () => console.log(`Listening on port ${port}`))