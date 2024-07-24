import mysql from 'mysql2';

const config = {
  host: 'octdb.cf0wq2me40rb.ca-central-1.rds.amazonaws.com',
  user: 'admin',
  password: 'audrey-masengu',
  database: 'oct',
  port: 3306
};


const connection = mysql.createConnection(config);

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database:', error);
  } else {
    console.log('Connected to MySQL database!');
  }
});

export {
  connection
}