const personDAO = require("../dao/person.js");
class PeersonService {
  createPerson(personDto) {
    const { firstName, lastName, email } = personDto;
    return personDAO.createPerson(firstName, lastName, email);
  }
}
module.exports = new PeersonService();
