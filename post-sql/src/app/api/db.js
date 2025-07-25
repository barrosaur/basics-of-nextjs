import mysql from 'mysql2/promise';

// dont hardcode; this is for safety
export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  // make sure to specify port if localhost or maybe something in the future
  port: process.env.DB_PORT,
})