const personService = require("../service/person.js");

class PersonController {
  async createPerson(req, res) {
    try {
      const id = await personService.createPerson(req.body);
      console.log(id);
      res.send(req.body);
      // res.status(201).json(id);
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new PersonController();
