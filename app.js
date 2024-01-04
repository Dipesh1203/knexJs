const express = require("express");
const app = express();
const db = require("./db/db.js");
const bodyParser = require("body-parser");
const personController = require("./controller/person.js");
const router = require("./routes/person.js");

// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/person", router);

app.listen(8080, () => {
  console.log("listening to port");
});
