const bodyParser = require("body-parser");
const express = require("express");
const mysql = require("mysql");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

const connection = mysql.createConnection({
  user: "root",
  password: "mysql",
  database: "parkinglot",
  host: "svc.sel4.cloudtype.app",
  port: 32676,
});

connection.connect();

// connection.end();

app.get("/", function (req, res) {
  console.log("hello");
  connection.query("select * from User", (err, data) => {
    if (err) throw err;
    console.log("User info is: ", data);
    res.send(data);
  });
});

app.get("/insert", function (req, res) {
  connection.query(
    "insert into User(UserName, Password, CarNum, Enter) values (?)",
    [["youngeun", "0113", "78라1134", 1]],
    (err, data) => {
      console.log("데이터 삽입 완료");
      res.redirect("/");
    }
  );
});

app.get("/search", function (req, res) {
  console.log(req.query.id);
  connection.query(
    "select * from User where UserName = ?",
    [[req.query.id]],
    (err, data) => {
      res.send(data);
    }
  );
});

app.listen(port, () => {
  console.log(`node start ${port}`);
});
