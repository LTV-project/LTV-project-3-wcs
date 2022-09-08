const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(users) {
    return this.connection.query(
      `insert into ${this.table} (pseudo, firstname, lastname, age, email, password) values (?, ?, ?, ?, ?, ?)`,
      [
        users.pseudo,
        users.firstname,
        users.lastname,
        users.age,
        users.email,
        users.password,
      ]
    );
  }

  update(users) {
    return this.connection.query(
      `update ${this.table} set pseudo = ?, firstname = ?, lastname = ?, age = ?, email = ?, password = ? where id = ?`,
      [
        users.pseudo,
        users.firstname,
        users.lastname,
        users.age,
        users.email,
        users.password,
      ]
    );
  }
}

module.exports = UsersManager;
