const AbstractManager = require("./AbstractManager");

class GamesManager extends AbstractManager {
  constructor() {
    super({ table: "games" });
  }

  insert(games) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [games.title]
    );
  }

  update(games) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [games.title, games.id]
    );
  }
}

module.exports = GamesManager;
