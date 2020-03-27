var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Apply the "Redirect after Post" pattern,
// a.k.a PRG (Post/Redierct/Get)
// See https://en.wikipedia.org/wiki/Post/Redirect/Get
router.post('/process', (req, res) => {
  req.session.info = req.body.info || 'default value';
  res.redirect('/process');  // Redirect using GET method
});

router.get('/process', (req, res) => {
  const info = req.session.info;
  res.render('process', { info });
});

module.exports = router;
