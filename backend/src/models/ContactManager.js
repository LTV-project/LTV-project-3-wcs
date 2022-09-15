const AbstractManager = require("./AbstractManager");

class ContactManager extends AbstractManager {
  constructor() {
    super({ table: "contact" });
  }

  insert(contact) {
    return this.connection.query(
      `insert into ${this.table} (pseudo, firstname, lastname, content, email) values (?, ?, ?, ?, ?)`,
      [
        contact.pseudo,
        contact.firstname,
        contact.lastname,
        contact.content,
        contact.email,
      ]
    );
  }

  update(contact) {
    return this.connection.query(
      `update ${this.table} set pseudo = ?, firstname = ?, lastname = ?, content = ?, email = ? where id = ?`,
      [
        contact.pseudo,
        contact.firstname,
        contact.lastname,
        contact.content,
        contact.email,
      ]
    );
  }
}

module.exports = ContactManager;
