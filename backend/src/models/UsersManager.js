const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (pseudo, firstname, lastname, age, email, hashedPassword, image, description) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.pseudo,
        user.firstname,
        user.lastname,
        user.age,
        user.email,
        user.hashedPassword,
        user.image,
        user.description,
      ]
    );
  }

  findUserByMail(email) {
    return this.connection.query(
      `select * from ${this.table} where email = ?`,
      [email]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set pseudo = ?, firstname = ?, lastname = ?, age = ?, email = ?, hashedPassword = ?, image = ?, description = ? where id = ?`,
      [
        user.pseudo,
        user.firstname,
        user.lastname,
        user.age,
        user.email,
        user.hashedPassword,
        user.image,
        user.description,
        user.id,
      ]
    );
  }
}

module.exports = UsersManager;
