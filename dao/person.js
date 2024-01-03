const db = require("../db/db.js");
class PersonDAO {
  async createPerson(firstName, lastName, email) {
    const [id] = await db("person")
      .insert({
        first_name: firstName,
        last_name: lastName,
        email,
      })
      .returning("id");

    return id;
  }
}
module.exports = new PersonDAO();
