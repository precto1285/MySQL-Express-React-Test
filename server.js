const express = require('express');
const mysql = require('mysql');


const PORT = process.env.PORT || 3000;

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'edgesongs_db'
});

connection.connect(function (err) {
  (err) ? console.log(err) : console.log(connect);
})

require('./routes/html-routes')(app);

app.listen(PORT, () => {
  console.log(`App running on Port ${PORT}`);
});