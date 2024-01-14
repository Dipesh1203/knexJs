const express = require("express");
const app = express();
const db = require("./db/db.js");
const path = require("path");
const ejsMate = require("ejs-mate");
const bodyParser = require("body-parser");
const personController = require("./controller/person.js");
const router = require("./routes/person.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/person", router);

app.listen(8080, () => {
  console.log("listening to port");
});
