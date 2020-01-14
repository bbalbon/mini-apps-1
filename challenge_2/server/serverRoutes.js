const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.post('/upload_json', (req, res) => {
  res.send('Hello');
})

module.exports = router;