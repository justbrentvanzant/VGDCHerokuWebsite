var express = require('express');
var app = express();
var serv = require('http').Server(app);
 
app.get('/',function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.use(express.static('public'))
 
serv.listen(2000);
console.log("Server started.");