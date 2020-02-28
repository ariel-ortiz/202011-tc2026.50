const fs = require('fs');
const util = require('util');

const createReadFilePromise = util.promisify(fs.readFile);
const createWriteFilePromise = util.promisify(fs.writeFile);

/**
 * Reads the three files and writes their concatantion
 * into a fourth file.
 */
function concatenate() {
  let result = '';
  createReadFilePromise('uno.txt')
    .then(data => {
      result += data.toString();
      return createReadFilePromise('dos.txt');
    }).then(data => {
      result += data.toString();
      return createReadFilePromise('tresx.txt');
    }).then(data => {
      result += data.toString();
      return createWriteFilePromise('cuatro.txt', result);
    }).then(() => {
      console.log('Ok');
    }).catch(err => {
      console.log('Error!!!', err);
    }).finally(() => {
      console.log('The end!');
    });
}

concatenate();