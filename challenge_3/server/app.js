const express = require('express');
const app = express();
const parser = require('body-parser');

app.use(express.static(__dirname + '/../public'));
app.use(parser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.post('/submit_order', (req, res) => {
  console.log(req.body);
  res.send();
})

app.listen(3000, () => {
  console.log(`App listening on port 3000`);
})
