var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// BEWARE: This code is potentially dangerous. Using a global
// variable like this may produce a race codition.
let info;

// Apply the "Redirect after Post" pattern,
// a.k.a PRG (Post/Redierct/Get)
// See https://en.wikipedia.org/wiki/Post/Redirect/Get
router.post('/process', (req, res) => {
  info = req.body.info || 'default value';
  console.log(`info = "${ req.body.info }"`);
  console.log(info);
  res.redirect('/process');  // Redirect using GET method
});

router.get('/process', (req, res) => {
  res.render('process', { info });
});

module.exports = router;
