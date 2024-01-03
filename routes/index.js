const express = require("express");
const personController = require("../controller/person.js");

const router = express.Router();
router.post("/person", personController.createPerson);

module.exports = router;
