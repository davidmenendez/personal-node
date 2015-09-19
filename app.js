var express = require('express'),
	path = require('path'),
	app = express(),
	routes = require('./routes/index');
	app.use('/', routes);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.set('port', process.env.PORT || 8000);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});