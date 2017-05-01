//========================= packages ===================
var express = require('express');
var app     = express();
var port    = process.env.PORT || 8080;
var morgan  = require('morgan');
var mongoose = require('mongoose');
var User    = require('./app/models/user');
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);
var path = require('path');

//====================== middlewares ====================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'))
app.use('/api', appRoutes);//putted here because if above. it will not call

//======================= connection ======================
mongoose.connect('mongodb://localhost:27017/tutorial', function(err){
    if(err){
        console.log('error: db not connected,'+ err);
    }
    else{
        console.log('Connected to database');
    }
});

//====================== routes==========================
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

//==================== server port ======================
app.listen(port, function(){
    console.log('theek chal gya');
});
 