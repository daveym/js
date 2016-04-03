var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MyApp', text: 'Playing about with Express for fun'});
});

module.exports = router;
