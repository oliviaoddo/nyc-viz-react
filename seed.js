// var fs = require('fs');
// var parse = require('csv-parse');

// var parser = parse({delimiter: ';'}, function(err, data){
//   console.log(data);
// });

// console.log(__dirname+'/food.csv')
// fs.createReadStream(__dirname+'/food.csv').pipe(parser);
const  { Food, Noise, Graffiti } = require('./db/models');

const fs = require('fs')
var parse = require('csv-parse')
fs.readFile('./food.csv', function (err, fileData) {
  parse(fileData, {columns: true, trim: true}, function(err, rows) {
    Food.bulkCreate(rows).then(function() { // Notice: There are no arguments here, as of right now you'll have to...
      console.log('bulk created!')
    }).catch(err => {console.log(error)})
  })
})

fs.readFile('./noise_residential.csv', function (err, fileData) {
  parse(fileData, {columns: true, trim: true}, function(err, rows) {
    Noise.bulkCreate(rows).then(function() { // Notice: There are no arguments here, as of right now you'll have to...
      console.log('bulk created!')
    }).catch(err => {console.log(error)})
  })
})

fs.readFile('./graffiti2.csv', function (err, fileData) {
  parse(fileData, {columns: true, trim: true}, function(err, rows) {
    Graffiti.bulkCreate(rows).then(function() { // Notice: There are no arguments here, as of right now you'll have to...
      console.log('bulk created!')
    }).catch(err => {console.log(error)})
  })
})
