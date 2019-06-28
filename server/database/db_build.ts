const fs = require("fs");
const dbConnection = require("./db_connection.ts");
const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

dbConnection.query(sql, (err, res) => {
  if (err) throw err;
  console.log("success!");
});

const runDbBuild = cb => {
  dbConnection.query(sql, (err, res) => {
    if (err) return cb(err);
    cb(null, res);
  });
};

module.exports = runDbBuild;
