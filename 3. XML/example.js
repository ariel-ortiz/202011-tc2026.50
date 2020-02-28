const fs = require('fs');
const xml2js = require('xml2js');

const parser = new xml2js.Parser();

fs.readFile('movies.xml', (err, data) => {
  parser.parseString(data, (err, result) => {
    console.log(result['movies']['film'][1]['cast'][0]);
    console.log('Done');
  });
});