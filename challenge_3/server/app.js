const express = require('express');
const app = express();
const parser = require('body-parser');
const controller = require('./controller.js');

app.use(express.static(__dirname + '/../public'));
app.use(parser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.post('/submit_order', controller.post);

app.listen(3000, () => {
  console.log(`App listening on port 3000`);
})
