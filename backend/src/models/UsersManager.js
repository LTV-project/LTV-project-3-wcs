const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (pseudo, firstname, lastname, age, email, password) values (?, ?, ?, ?, ?, ?)`,
      [
        user.pseudo,
        user.firstname,
        user.lastname,
        user.age,
        user.email,
        user.password,
      ]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set pseudo = ?, firstname = ?, lastname = ?, age = ?, email = ?, password = ? where id = ?`,
      [
        user.pseudo,
        user.firstname,
        user.lastname,
        user.age,
        user.email,
        user.password,
        user.id,
      ]
    );
  }
}

module.exports = UsersManager;
