const AbstractManager = require("./AbstractManager");

class categoryManager extends AbstractManager {
  constructor() {
    super({ table: "category" });
  }

  insert(category) {
    return this.connection.query(
      `insert into ${this.table} (game, talk) values (?, ?)`,
      [category.game, category.talk]
    );
  }

  update(category) {
    return this.connection.query(
      `update ${this.table} set game = ?, talk = ?`,
      [category.game, category.talk, category.id]
    );
  }
}

module.exports = categoryManager;
