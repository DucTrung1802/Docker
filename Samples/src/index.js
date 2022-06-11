const DB_HOST = "db"
const DB_USER = "user"
const DB_PASS = "pass"
const DB_DATABASE = "database"

const express = require("express");
 
const knex = require("knex")({
  client: "postgresql",
  connection: {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_DATABASE
  },
});

try {

  // Create a table
  await knex.schema
  .createTable()
}


const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/time", (req, res) => {
  res.send(new Date());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
