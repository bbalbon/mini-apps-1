const express = require('express');
const app = express();

app.use(express.static(__dirname + '/client'));

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.listen(3000, () => {
  console.log(`App listening on port 3000`);
})
