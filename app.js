const express = require("express");
const app = express();
const router = require("./routes");

app.use(router);

app.listen(8080, () => {
  console.log("listening to port");
});
