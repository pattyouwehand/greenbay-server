const Sequelize = require('sequelize')
const db = require('../db')

const Advertisement = db.define(
  'advertisement',
  { title:{
    type: Sequelize.STRING,
    allowNull: false
  },
  price:{
    type:Sequelize.NUMBER,
    allowNull: false
  },
  description:{
    type: Sequelize.STRING,
    allowNull: false
  },
  category:{
    type: Sequelize.STRING,
    allowNull: false
  },
  picture:{
    type: Sequelize.STRING,
    allowNull: false
  },
  email:{
    type: Sequelize.STRING,
    allowNull: false
  },
  phonenumber:{
    type: Sequelize.NUMBER,
    allowNull: false
  }

  }
    
)