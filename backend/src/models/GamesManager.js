const AbstractManager = require("./AbstractManager");

class GamesManager extends AbstractManager {
  constructor() {
    super({ table: "games" });
  }

  insert(games) {
    return this.connection.query(
      `insert into ${this.table} (name, category) values (?, ?)`,
      [games.name, games.category]
    );
  }

  update(games) {
    return this.connection.query(
      `update ${this.table} set name = ?, category = ? where id = ?`,
      [games.name, games.category]
    );
  }
}

module.exports = GamesManager;
