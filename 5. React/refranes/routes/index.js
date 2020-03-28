var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

const refranes = require('./refranes.json');

router.get('/refran', (req, res) => {
  const refran = refranes[(Math.random() * refranes.length) | 0];
  res.json({ refran });
});