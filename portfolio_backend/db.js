// MySQL Database Connection Setup

// const mysql = require('mysql2');

// const db = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });

// db.getConnection((err, connection) => {
//   if (err) {
//     console.log("DB Connection Failed:", err);
//   } else {
//     console.log("MySQL Connected");
//     connection.release();
//   }
// });

// module.exports = db;


// MongoDB Connection Setup

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
.then(() => {  console.log("MongoDB Connected")})
.catch((err) => {  console.log("MongoDB Connection Failed:", err) });

module.exports = mongoose;