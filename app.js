const express = require("express");
const app = express();
const knex = require("./db/db.js");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/user", (req, res) => {
  knex("person")
    .insert({
      email: "rajeshjain211@gmail.com",
      first_name: "Rajesh",
      last_name: "Jain",
    })
    .then(() => {
      knex
        .select()
        .from("person")
        .then((users) => {
          console.log(users);
          res.send(users);
        });
    });
});

app.listen(8080, () => {
  console.log("listening to port");
});
