'use strict';
const express = require('express');
const router = express.Router();
const { Food, Noise, Graffiti } = require('../db/models');
const Promise = require("bluebird");
const neighborhoods = require('./zip-neighborhoods');

// router.get('/', (req, res, next) => {
//     res.render('home.html');
// });

router.get('/map/food', (req, res, next) => {
    let complaintCount = [
        ['count', 'name']
    ];

    let objKeys = Object.keys(neighborhoods);

    Promise.map(objKeys, (key) => {
            return Promise.reduce(neighborhoods[key], function(acc, value) {
                return Food.count({ where: { 'Incident Zip': value } })
                    .then(function(contents) {
                        return acc + contents;
                    });
            }, 0).then(function(total) {
                complaintCount.push([total.toString(), key])
            })
        }).then(function() {
            res.json(complaintCount);
        })
        .catch(console.err);
});


router.get('/map/noise', (req, res, next) => {
    Noise.findAll()
        .then(complaintArr => {
            return complaintArr.map(el => {
                return [Number(el.Latitude), Number(el.Longitude)];
            });
        })
        .then(heatMapLocations => {
            res.json(heatMapLocations);
        })
        .catch(console.err);
});


router.get('/map/graffiti', (req, res, next) => {
    let complaintCenters = {};
    Graffiti.findAll()
        .then(complaintArr => {
            return complaintArr.forEach(el => {
                complaintCenters[el.id] = {
                    center: { lat: Number(el.Latitude), lng: Number(el.Longitude) }
                };
            });
        })
        .then(obj => {
            res.json(complaintCenters);
        })
        .catch(console.err);
});

module.exports = router;
