const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
const PeopleRoutes = require("./routes/people");
const Devedores = require("./routes/pgfn");

var app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
app.use("/people", PeopleRoutes);
app.use("/devedores", Devedores);

app.listen(3000)