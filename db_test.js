const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '187.127.171.51',
  user: 'sql_187_127_171_51',
  password: '46f23b4ecd279',
  database: 'testing_database',
  port: 3306
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to testing_database: ' + err.stack);
    return;
  }
  console.log('Connected successfully!');
  connection.query('SELECT * FROM rooms LIMIT 30', (error, results) => {
    if (error) throw error;
    console.log('Rooms in testing_database:', results);
    connection.end();
  });
});
