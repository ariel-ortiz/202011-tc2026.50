var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Algo loco' });
});

module.exports = router;

/**
 * Computes the factorial of n.
 */
function fact(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

router.get('/demo', (req, res) => {
  let n = 5;
  let x = fact(n);
  let enanos = ['Dwalin', 'Balin', 'Kili', 'Fili',
    'Dori', 'Nori', 'Ori', 'Oin', 'Gloin', 'Bifur',
    'Bofur', 'Bombur', 'Thorin'];
  res.render('demo', { n, x, enanos });
});
