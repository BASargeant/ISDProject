var express = require('express');
var mysql = require('mysql');

const PORT = 8080;
var QUERY = 'SELECT * FROM Crime';
//const TYPE_QUERY = "SELECT * FROM 'Crime' WHERE type =?";
const SEARCH_QUERY = "SELECT * FROM `Crime` WHERE `WARD NAME` LIKE ?";
const ID_QUERY = "SELECT * FROM `Crime` Where `WARD NAME` = ?";
var connection = mysql.createConnection({
    "host"     : "mysql5.cems.uwe.ac.uk",
    "user"     : "fet21050336",
    "password" : "sqlroot",
    "database" : "fet21050336"
});

var app = express();
app.set("view engine", "ejs");
//app.use(express.static("static")); - style sheet location - currently do not have a separate CSS file

function splash(request, response) {
    if (request.query.search) {
        connection.query(SEARCH_QUERY,["%"+request.query.search+"%"],function(err,rows, fields){
        if (err) throw err;
        else response.render("TablePage",{results:rows});
        });
    }
    else connection.query(QUERY, function (err, rows, fields) {
        if (err) throw err;
        else response.render("HomePage");
        
    });
   
}

app.get("/", splash);

app.get("/HomePage.html", splash);





app.get("/MapPage.html",function(request, response) {
    connection.query(QUERY, function(err, rows, fields) {
        if (err) serverError(err, response);
        else response.render("MapPage", { results: rows, lat: request.query.lat, lon: request.query.lon });
    });
});


app.get("/TablePage.html", function (request, response) {
    if (request.query.search) {
        connection.query(SEARCH_QUERY,["%"+request.query.search+"%"],function(err,rows, fields){
        if (err) throw err;
        else response.render("TablePage",{results:rows});
        });
    }
    else connection.query(QUERY, function (err, rows, fields) {
        if (err) throw err;
        else response.render("TablePage", {results: rows});
        
    });
    

});
app.get("/TablePageBurg.html", function (request, response) {
    
    if (request.query.search) {
        connection.query(SEARCH_QUERY,["%"+request.query.search+"%"],function(err,rows, fields){
        if (err) throw err;
        
        else response.render("TablePageBurg", {results: rows});
        });
    }
    else connection.query(QUERY, function (err, rows, fields) {
        if (err) throw err;
        
        else response.render("TablePageBurg", {results: rows});
        
    });
    

});

app.get("/TablePageViolent.html", function (request, response) {
    
    if (request.query.search) {
        connection.query(SEARCH_QUERY,["%"+request.query.search+"%"],function(err,rows, fields){
        if (err) throw err;
        else response.render("TablePageViolent", {results: rows});
        });
    }
    else connection.query(QUERY, function (err, rows, fields) {
        if (err) throw err;
        else response.render("TablePageViolent", {results: rows});
        
    });
});


app.get("/record.html",function(request, response) {
    connection.query(ID_QUERY, [request.query.id], function(err, rows, fields) {
        if (err) serverError(err, response);
        else response.render("index", {results: rows});
    });
});

       


//start server
app.listen(PORT);
console.log('Listening on port %s', PORT);


