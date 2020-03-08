var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Travel Itinerary' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { page_name: 'Registration' });
});

module.exports = router;
