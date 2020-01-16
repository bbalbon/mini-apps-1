const models = require('./models.js')

module.exports.post = function (req, res) {
  models.post(req.body, () => {
    res.end('Success');
  });
}