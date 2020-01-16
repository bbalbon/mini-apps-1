const express = require('express');
const app = express();
const parser = require('body-parser');

app.use(express.static(__dirname + '/client/dist'));
app.use(parser.json());

app.get('/', (req, res) => {
  res.send('Yes');
})

app.listen(3000, () => {
  console.log('App listening on port 3000!');
})

