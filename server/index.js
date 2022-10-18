const express = require('express');
const mysql = require('mysql');
const favicon = require('serve-favicon');
const timeout = require('connect-timeout');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const { env } = require('process');


// Connecting .env variables
dotenv.config({ path: './.env' });



PORT = process.env.PORT || 3001;

// instantiate an express app
const app = express();

const db = mysql.createPool({
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true})); 


app.post('/api/insert', (req, res) => {
  const date = req.body.date;
  const first = req.body.firstName;
  const last = req.body.lastName;
  const email = req.body.email;
  const subject = req.body.subject;
  const msg = req.body.message;

  const sqlQuery = "INSERT INTO messages (time_added, first, last, email, subject, message) VALUES (?, ?, ?, ?, ?, ?);"

  db.query(
    sqlQuery,
    [date, first, last, email, subject, msg],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(req.body);
      }
    }
  );
});


// app.post('/', async function(req, res) {

//   try {
//       console.log('inside the post request');
    
//       const date = req.body.date;
//       const first = req.body.firstName;
//       const last = req.body.lastName;
//       const email = req.body.email;
//       const subject = req.body.subject;
//       const msg = req.body.message;
    
//       console.log('after saving body to variables');
    
//       const sqlQuery = "INSERT INTO messages (time_added, first, last, email, subject, message) VALUES (?, ?, ?, ?, ?, ?);"
//       const result = db.query(sqlQuery, [date, first, last, email, subject, msg])
//       res.status(200).json(result);
//   } catch (error) {
//     result.status(400).send(error.message);
//   }

// });

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});