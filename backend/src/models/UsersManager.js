const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (pseudo, firstname, lastname, age, email, hashedPassword) values (?, ?, ?, ?, ?, ?)`,
      [
        user.pseudo,
        user.firstname,
        user.lastname,
        user.age,
        user.email,
        user.hashedPassword,
      ]
    );
  }

  findUserByMail(email) {
    return this.connection.query(
      `select * from ${this.table} where email = ?`,
      [email]
    );
  }

  findUserWithDescriptionAndAvatar() {
    return this.connection.query(
      `SELECT u.id, u.pseudo, i.image, c.description 
      FROM ${this.table} u
      INNER JOIN images i 
      ON i.user_id=u.id
      LEFT JOIN comments c
      ON c.id=u.comments_id;`
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set pseudo = ?, firstname = ?, lastname = ?, age = ?, email = ?, hashedPassword = ? where id = ?`,
      [
        user.pseudo,
        user.firstname,
        user.lastname,
        user.age,
        user.email,
        user.hashedPassword,
        user.id,
      ]
    );
  }
}

module.exports = UsersManager;
