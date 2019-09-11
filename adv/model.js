const Sequelize = require('sequelize')
const db = require('../db')

const Advertisement = db.define(
'advertisement',
{ title:{
    type: Sequelize.STRING,
    field: 'title',
    allowNull: false
  },
  price:{
    type:Sequelize.NUMBER,
    field: 'price',
    allowNull: false
  },
  description:{
    type: Sequelize.STRING,
    field: 'description',
    allowNull: false
  },
  category:{
    type: Sequelize.STRING,
    field: 'category',
    allowNull: false
  },
  picture:{
    type: Sequelize.STRING,
    field: 'url',
    allowNull: false
  },
  email:{
    type: Sequelize.STRING,
    field: 'email',
    allowNull: false
  },
  phonenumber:{
    type: Sequelize.NUMBER,
    field: 'phone_number',
    allowNull: false
  }
})

module.exports = Advertisement

