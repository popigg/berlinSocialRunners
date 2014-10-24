'use strict';

var express = require('express');
var app 	= express();
var swig 	= require('swig');


app.engine('html', swig.renderFile);
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/img'));

app.set('view engine', 'html');
app.set('views', __dirname);

app.set('view cache', false);

swig.setDefaults({ cache: false });

app.get('/', function(req, res){
  res.render('index', { });
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});