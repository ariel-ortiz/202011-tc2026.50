const fs = require('fs');
const util = require('util');

const createReadFilePromise = util.promisify(fs.readFile);
const createWriteFilePromise = util.promisify(fs.writeFile);

/**
 * Reads the three files and writes their concatantion
 * into a fourth file.
 */
async function concatenate() {
  try {
    let result = '';
    let uno = await createReadFilePromise('uno.txt');
    result += uno.toString();
    let dos = await createReadFilePromise('dos.txt');
    result += dos.toString();
    let tres = await createReadFilePromise('tres.txt');
    result += tres.toString();
    await createWriteFilePromise('cuatro.txt', result);
    console.log('Ok');

  } catch (err) {
    console.log('Error!!!', err);

  } finally {
    console.log('The end');
  }
}

concatenate();