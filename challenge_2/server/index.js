const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const csv = require('./convert.js');
const Promise = require('bluebird');
const fs = require('fs');
const fAsync = Promise.promisifyAll(fs);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client'));

app.listen(3000, () => {
  console.log(`Chicken App listening on port 3000!`);
})

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/upload_json', (req, res) => {
  data = JSON.parse(req.body.input);
  let converted = csv.convertus(data);
  fAsync.writeFileAsync('sales.csv', converted)
    .then(() => {
      return fAsync.readFileAsync(__dirname + '/../sales.csv')
    })
    .then((fileContents) => {
      res.send(fileContents);
    })
})