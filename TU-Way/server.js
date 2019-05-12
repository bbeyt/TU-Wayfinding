const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const mysql = require('mysql');
const dbConfig = require('./databaseConfig.js');
const url = require('url');
const app = express();


app.use(bodyParser.json());

const upload = multer({ dest: 'tmp/uploads/' })
const ngrok = require('ngrok');
(async function() {
  const url = await ngrok.connect();
})();
const api = ngrok.getApi();

const connection = mysql.createConnection({
    host     : dbConfig.host,
    user     : dbConfig.user,
    password : dbConfig.password,
    database : dbConfig.database
});

//Adds a listener that attempts to reconnect when DB connection is dropped.
function handleDisconnect(connection) {
    connection.on('error', function(err) {
      if (!err.fatal) {
        return;
      }
  
      if (err.code !== 'PROTOCOL_CONNECTION_LOST') {
        throw err;
      }
  
      console.log('Re-connecting lost connection: ' + err.stack);
  
      connection = mysql.createConnection(connection.config);
      handleDisconnect(connection);
      connection.connect();
    });
}
const fs = require('fs');

handleDisconnect(connection);
//connection.connect();


connection.connect(function(err) {
    if (err) throw err;
    //Add an input check for any semicolons to prevent sql injection on login
    //Select only course, building location, and when the class is from "course_info":
    connection.query("SELECT Course, Building, Room, Days, Time  FROM course_info ORDER BY Course LIMIT 10",
     function (err, result, fields) {
      if (err) throw err;
      fs.writeFile("./classList.json", JSON.stringify(result), (err) => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("File has been created");
    });
    });
});

app.get('/', upload.none(), function (req, res) {
   res.send('Welcome to the TU-Way server.');
})

app.use(function(req, res, next) {
  req.getUrl = function() {
    return req.protocol + "://" + req.get('host') + req.originalUrl;
  }
  return next();
});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Server listening at http://%s:%s", host, port)
 })
