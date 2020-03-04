'use strict';

const config = require('./config');
const Postgres = require('pg').Client;

const sql = new Postgres(config);
sql.connect();

sql.on('error', (err) => {
  console.error('SQL Fail', err);
  sql.end();
});

//return lists of users in usersTable
async function listUsers() {
  const q = 'SELECT * FROM usersTable;';
  const result = await sql.query(q);
  return result.rows;
}

//add user to the database
async function addUser(user) {
  const q = 'INSERT INTO usersTable (user) VALUES ($1);';
  await sql.query(q, [user]);
  return listUsers();
}

module.exports = {
  listUsers,
  addUser,
};
