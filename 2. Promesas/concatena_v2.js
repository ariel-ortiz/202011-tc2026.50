const fs = require('fs');

function createReadFilePromise(name) {
  return new Promise((resolve, reject) => {
    fs.readFile(name, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function createWriteFilePromise(name, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(name, data, err => {
      if (err) {
        reject(err);
      } else {
        resolve('Ok');
      }
    });
  });
}

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
      return createReadFilePromise('tres.txt');
    }).then(data => {
      result += data.toString();
      return createWriteFilePromise('cuatro.txt', result);
    }).then(x => {
      console.log(x);
    }).catch(err => {
      console.log('Error!!!', err);
    });
}

concatenate();