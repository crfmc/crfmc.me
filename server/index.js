const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');


// Connecting .env variables
dotenv.config({ path: './.env' });



PORT = process.env.PORT || 3001;

// instantiate an express app
const app = express();

const db = mysql.createConnection(process.env.DATABASE_URL)

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const build = path.join(__dirname, '../client/build');
app.use(express.static(build));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});


app.get('/api/insert', (req, res) => {
  res.send('Hello World!');
});



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


app.get('/', async function(req, res) {
  res.sendFile(path.join(build, 'index.html'))

  return res;
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});