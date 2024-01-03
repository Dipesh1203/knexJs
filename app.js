const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routes/index.js");

app.use(bodyParser.json());

app.use(router);

app.listen(8080, () => {
  console.log("listening to port");
});
