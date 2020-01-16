const mysql = require('mysql');

connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'chat'
})

module.exports.query = (query, callback) => {
  return new Promise (resolve, reject) => {
    connection.query(query, (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        results.length === 0 ? reject(error) : resolve(results);
      }
    })
  }
}