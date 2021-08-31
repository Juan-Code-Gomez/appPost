const express = require("express");
const {dbConnection} = require("./db/db")
require("dotenv").config();

const app = express();

app.listen(process.env.PORT, () =>
  console.log("Backend is running on port:" + process.env.PORT)
);

dbConnection();