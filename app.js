var express = require('express');
var path = require('path');
var compression = require('compression')
var routes = require('./routes/index');
var logger = require('morgan');
var app = express();

app.use(compression());
app.use('/', routes);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.set('port', process.env.PORT || 8000);
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});