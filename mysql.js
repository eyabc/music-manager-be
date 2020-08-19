import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

let connection = mysql.createConnection({
    host: process.env.RDS_HOST,
    user: process.env.RDS_USER,           // mysql user
    password: process.env.RDS_PASSWORD,       // mysql password
    database: process.env.RDS_DATABASE,
});
//
connection.connect();
//
// // connection.query('SELECT 1 + 1 AS solution',
// //     function (error, results, fields) {
// //         if (error) throw error;
// //         console.log('The solution is: ', results[0].solution);
// //     });
//
// connection.end();