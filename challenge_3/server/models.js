const db = require('./index.js');

module.exports.post = function (message, callback) {
  return db.query(`INSERT INTO details (name, email, password, address, city, state, zipcode, creditcard, expiry, cvv, billingzip) values ('${message.name}', '${message.email}', '${message.password}', '${message.address}', '${message.city}', '${message.state}', '${message.zipcode}', '${message.creditcard}', '${message.expiry}', '${message.cvv}', '${message.billingzip}')`)
    .then(() => {
      callback();
    })
}