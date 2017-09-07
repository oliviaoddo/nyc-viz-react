'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

module.exports = db.define('noise', {
     'Unique Key': Sequelize.STRING,
    'Created Date': Sequelize.STRING,
    'Complaint Type': Sequelize.STRING,
    'Incident Zip': Sequelize.STRING,
    Borough: Sequelize.STRING,
    Latitude: Sequelize.STRING,
    Longitude: Sequelize.STRING,
    Location: Sequelize.TEXT
}, {
    timestamps: false
    }
);
