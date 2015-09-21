var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'David Menendez | Front End Developer' });
});
router.get('/portfolio', function(req, res, next) {
	res.render('portfolio', { title: 'Portfolio | David Menendez | Front End Developer' });
});
router.get('/about', function(req, res, next) {
	res.render('about', { title: 'About | David Menendez | Front End Developer' });
});

module.exports = router;
