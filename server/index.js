const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Datta@1503",
  database: "employeeSystem",
});

app.post("/create", (req, res) => {
  const fullName = req.body.fullName;
  const email = req.body.email;
  const phoneNo = req.body.phoneNo;
  const password = req.body.password;
  const amount = req.body.amount;

  db.query(
    "INSERT INTO register (fullname,email,phone,password,amount) VALUES (?, ?, ?, ?, ?)",
    [fullName, email, phoneNo, password, amount],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * from register WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong username/password combination!" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Yay, your server is running on port 3001");
});
