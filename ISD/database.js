var mysql = require('mysql');


var connection = mysql.createConnection({
    "host"     : "mysql5.cems.uwe.ac.uk",
    "user"     : "fet21050336",
    "password" : "sqlroot",
    "database" : "fet21050336"
});

connection.connect(function(err){
	if (err) {
    	console.error("Connection error: ", err.message);    
	} else {
    	console.log("Connected as: ", connection.threadId);    
	}
});

var QUERY = 'SELECT * FROM Crime';
var QUERY1 = 'SELECT * FROM Crime WHERE `Time Period`= ?';

connection.query(QUERY, function(err, rows, fields) {
    if (err) throw err;
    for (var i=0; i<rows.length; i++) {
        // change these attributes to those in your database
        console.log(rows[i]['Ward Code'], rows[i]['Ward Name']);
    }
    console.log();
});

connection.query(QUERY1, ["2020/21"], function(err, rows, fields) {
    if (err) throw err;
    for (var i=0; i<rows.length; i++) {
        // change these attributes to those in your database
        console.log(rows[i]['Ward Code'], rows[i]['Ward Name'], rows[i]['Time Period']);
    }
});

console.log("CHECK WHY QUERY1 IS NOT PRINTING THE TIME PERIOD");

connection.end();
console.log("finished");