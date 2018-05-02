var os = require( 'os' );

var networkInterfaces = os.networkInterfaces( );

//console.log( networkInterfaces );
//console.log( networkInterfaces.en1[1].address );

var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send(networkInterfaces)
  //.en1[1].address
})
 
app.listen(3000)
