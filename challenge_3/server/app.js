const express = require('express');
const app = express();

app.use(express.static(__dirname + '/../public'));

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.post('/submit_order', (req, res) => {
  
  res.send();
})

app.listen(3000, () => {
  console.log(`App listening on port 3000`);
})
