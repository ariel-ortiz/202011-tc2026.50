const fs = require('fs');

/**
 * Reads the three files and writes their concatantion
 * into a fourth file.
 */
function concatenate() {
  let resultado = '';
  fs.readFile('uno.txt', (err, data) => {
    if (err) {
      console.log('Error:', err);
    } else {
      resultado += data.toString();
      fs.readFile('dos.txt', (err, data) => {
        if (err) {
          console.log('Error:', err);
        } else {
          resultado += data.toString();
          fs.readFile('tres.txt', (err, data) => {
            if (err) {
              console.log('Error:', err);
            } else {
              resultado += data.toString();
              fs.writeFile('cuatro.txt', resultado, err => {
                if (err) {
                  console.log('Error:', err);
                } else {
                  console.log('Ok');
                }
              });
            }
          });
        }
      });
    }
  });
}

concatenate();
