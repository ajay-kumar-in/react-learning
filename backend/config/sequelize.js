"use strict"

const dbConfig = require('./dbConfig.js');
const { Sequelize, DataTypes } = require('sequelize');

const db = {}


const sequelize = new Sequelize(
    dbConfig.db,
    dbConfig.user,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        operatorsAliases: 0,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)
// console.log(dbConfig.user);
sequelize.authenticate()
    .then(() => {
        console.log('connected..')
    })
    .catch(err => {
        console.log('Error' + err)
    })


db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('../models/userModel')(sequelize, DataTypes);

db.products = require('../models/producteModel')(sequelize, DataTypes);
// db.reviews = require('./reviewModel.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('yes re-sync done!')
    })



module.exports = db;