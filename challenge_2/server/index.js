const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const csv = require('./convert.js');

app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/../client'));

app.listen(port, () => {
  console.log(`Chicken App listening on port ${port}!`);
})

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/upload_json', (req, res) => {
  data = JSON.parse(req.body.input);
  let converted = csv.convertus(data);

})