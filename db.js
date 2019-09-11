const Sequelize = require('sequelize')

const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres'
const db = new Sequelize(databaseUrl)

db
  .sync({ force: false })
  .then(() => console.log('Database schema updated'))
  .then(() => Promise.all([
    Advertisement.create(
      { title: 'Spathiphyllum',
        price: 20,
        description: `In addition to its exotic appearance, Lilly also has a strong air-purifying property.
                      This is mainly due to its large leaves. It not only produces a lot of oxygen with it,
                      but it also removes harmful substances such as benzene and formaldehyde from the air.
                      She needs some attention from you in return. You can really enjoy her for years,
                      as long as she gets enough water and is not in the sunlight too much.`,
        category: 'oxygen plant',
        picture: 'https://cdn.shopify.com/s/files/1/0761/9483/products/spathiphyllum-17-productpage_1024x1024.png?v=1567172976',
        email: 'fred@branche.com',
        phonenumber: '0613473913'
      }),
      Advertisement.create(
        { title: 'Alfredo',
          price: 25,
          description: `Alfredo is originally a Monstera Deliciosa, but is often referred to as the "Hole Plant"
                       in the Netherlands. How could that be? Alfredo is a pro in purifying the air, 
                       but he is also a bit toxic. So be careful with your pets!`,
          category: 'oxygen plant',
          picture: 'https://cdn.shopify.com/s/files/1/0761/9483/products/Monstera-Deliciosa-21-leaves_1024x1024.png?v=1567183148',
          email: 'fred@branche.com',
          phone_number: '0613473913'
        }),
        Advertisement.create(
          { title: 'Dypsis',
            price: 25,
            description: `Marty is of the Areca species and comes from Africa. To really come into its own, he needs a lot of 
                          sunlight and water. He gives you wonderful freshly purified air for the attention you give him. 
                          This is because it is particularly good at removing the harmful substances formaldehyde, benzene, 
                          trichlorethylene and toluene from the air. The care therefore requires some attention, 
                          but get so much in return!`,
            category: 'oxygen plant',
            picture: 'https://cdn.shopify.com/s/files/1/0761/9483/products/areca-21-productpage_1024x1024.png?v=1567178210',
            email: 'fred@branche.com',
            phone_number: '0613473913'
          }),
  ]))
  .catch(console.error)

module.exports = db