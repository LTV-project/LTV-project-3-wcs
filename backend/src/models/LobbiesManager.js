const AbstractManager = require("./AbstractManager");

class lobbieManager extends AbstractManager {
  constructor() {
    super({ table: "lobbie" });
  }

  insert(lobbie) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [lobbie.title]
    );
  }

  update(lobbie) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [lobbie.title, lobbie.id]
    );
  }
}

module.exports = lobbieManager;
