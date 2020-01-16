const mysql = require('mysql');
const Promise = require('bluebird');

connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'orders'
})

module.exports.query = (query, callback) => {
  return new Promise ((resolve, reject) => {
    connection.query(query, (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        results.length === 0 ? reject(error) : resolve(results);
      }
    });
  });
}