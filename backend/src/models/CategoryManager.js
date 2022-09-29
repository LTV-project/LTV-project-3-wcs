const AbstractManager = require("./AbstractManager");

class categoryManager extends AbstractManager {
  constructor() {
    super({ table: "category" });
  }

  insert(category) {
    return this.connection.query(
      `insert into ${this.table} (name) values (?)`,
      [category.name]
    );
  }

  update(category) {
    return this.connection.query(`update ${this.table} set name = ?`, [
      category.name,
      category.id,
    ]);
  }
}

module.exports = categoryManager;
