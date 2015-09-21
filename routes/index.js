var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'David Menendez | Front End Developer' });
});
router.get('/portfolio', function(req, res, next) {
	res.render('portfolio', { title: 'David Menendez | Portfolio' });
});


router.get('/portfolio/hadassah', function(req, res, next) {
	res.render('portfolio/hadassah', { title: 'David Menendez | Hadassah' });
});
router.get('/portfolio/colorado-childrens-hospital', function(req, res, next) {
	res.render('portfolio/colorado-childrens-hospital', { title: 'David Menendez | Colorado Childrens Hospital' });
});
router.get('/portfolio/blackbaud', function(req, res, next) {
	res.render('portfolio/blackbaud', { title: 'David Menendez | American Cancer Society' });
});
router.get('/portfolio/be-a-character', function(req, res, next) {
	res.render('portfolio/be-a-character', { title: 'David Menendez | Be A Character' });
});
router.get('/portfolio/brigewater', function(req, res, next) {
	res.render('portfolio/brigewater', { title: 'David Menendez | Bridgwater' });
});
router.get('/portfolio/national-hamburger-month', function(req, res, next) {
	res.render('portfolio/national-hamburger-month', { title: 'David Menendez | National Hamburger Month' });
});
router.get('/portfolio/zimmerman-blog', function(req, res, next) {
	res.render('portfolio/zimmerman-blog', { title: 'David Menendez | Zimmerman Blog' });
});
router.get('/portfolio/bikestreet', function(req, res, next) {
	res.render('portfolio/bikestreet', { title: 'David Menendez | Bikestreet' });
});
router.get('/portfolio/hottest-halloween', function(req, res, next) {
	res.render('portfolio/hottest-halloween', { title: 'David Menendez | Hottest Halloween' });
});


router.get('/about', function(req, res, next) {
	res.render('about', { title: 'David Menendez | About' });
});

module.exports = router;
