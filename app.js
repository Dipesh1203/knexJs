const express = require("express");
const app = express();
const router = require("./routes/index.js");

app.use(router);

app.listen(8080, () => {
  console.log("listening to port");
});
