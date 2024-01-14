const express = require("express");
const db = require("../db/db");
const personController = require("../controller/person.js");
const { createPerson } = require("../dao/person.js");

const router = express.Router();

router.get("/new", (req, res) => {
  res.render("person/person.ejs");
});

//create route
router.post("/", (req, res) => {
  personController.createPerson;
  res.redirect("person/show");
});

//show route
router.get("/show", async (req, res) => {
  let tableData = await db.select().from("person");
  console.log(tableData);
  res.render("person/index.ejs", { tableData });
});

module.exports = router;
