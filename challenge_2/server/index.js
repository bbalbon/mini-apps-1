const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../client'));

const router = require('./serverRoutes.js');

app.use(router);

app.listen(port, () => {
  console.log(`Chicken App listening on port ${port}!`);
})