var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index');
});
router.get('/portfolio', function(req, res, next) {
	res.render('portfolio');
});
router.get('/about', function(req, res, next) {
	res.render('about');
});

//Portfolio Entries
router.get('/portfolio/hadassah', function(req, res, next) {
	res.render('portfolio/hadassah');
});
router.get('/portfolio/colorado-childrens-hospital', function(req, res, next) {
	res.render('portfolio/colorado-childrens-hospital');
});
router.get('/portfolio/blackbaud', function(req, res, next) {
	res.render('portfolio/blackbaud');
});
router.get('/portfolio/be-a-character', function(req, res, next) {
	res.render('portfolio/be-a-character');
});
router.get('/portfolio/bridgewater', function(req, res, next) {
	res.render('portfolio/bridgewater');
});
router.get('/portfolio/national-hamburger-month', function(req, res, next) {
	res.render('portfolio/national-hamburger-month');
});
router.get('/portfolio/zimmerman-blog', function(req, res, next) {
	res.render('portfolio/zimmerman-blog');
});
router.get('/portfolio/bikestreet', function(req, res, next) {
	res.render('portfolio/bikestreet');
});
router.get('/portfolio/hottest-halloween', function(req, res, next) {
	res.render('portfolio/hottest-halloween');
});

module.exports = router;
