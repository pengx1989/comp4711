//express js
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// 
app.get('/', function (req, res) {
   res.send('Hello World, jack');
})

//configure the port 
var server = app.listen(9000, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("http://%s:%s", host, port)
 
})

//host the site
app.use(express.static(__dirname + '/www'));


//init mysql   
var mysql = require('mysql');
console.log("2");


//obtain the data from client with post method
app.post('/save', function (req, res) {
	
//connect mysql
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "question2"
});
	

//Clear data of table and inset data in to mysql
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql1 = "TRUNCATE TABLE question2full";
  
  con.query(sql1, function (err, result) {
    if (err) throw err;
    console.log("delete record");
  });
  
  
  var sql = "INSERT INTO question2full (QFull) VALUES ('"+req.body.id+"')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

   
})

//obtain the data from server with get method
app.get('/fetch', function (req, res) {
	
//connect mysql
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "question2"
});

//Select data in to mysql
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "SELECT * FROM question2full";
  con.query(sql, function (err, result) {
    if (err) throw err;
    //console.log(result);
	res.json(result);
  });
});


})

