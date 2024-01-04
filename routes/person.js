const express = require("express");
const personController = require("../controller/person.js");

const router = express.Router();

router.get("/new", (req, res) => {
  res.render("person/person.ejs");
});

router.post("/", personController.createPerson);

module.exports = router;
