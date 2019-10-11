const { join } = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const { generateUsers } = require('./utils');

const users = generateUsers(50);

const app = express();

app.use(bodyParser());

app.use(express.static(join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.get('/users', (req, res) => {
  const { search } = req.query;

  console.log(search);

  res.send(users.filter(i => i.name.includes(search)));
});

app.listen(3000, () => console.log('port 3000'));
