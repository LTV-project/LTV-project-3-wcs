const AbstractManager = require("./AbstractManager");

class lobbiesManager extends AbstractManager {
  constructor() {
    super({ table: "lobbies" });
  }

  insert(lobbies) {
    return this.connection.query(
      `insert into ${this.table} (travel_infos_id, number_of_gamers, theme, name, commentary, creator_id) values (?, ?, ?, ?, ?, ?)`,
      [
        lobbies.travel_infos_id,
        lobbies.number_of_gamers,
        lobbies.theme,
        lobbies.name,
        lobbies.commentary,
        lobbies.creator_id,
      ]
    );
  }

  update(lobbies) {
    return this.connection.query(
      `update ${this.table} set number_of_gamers = ?, theme = ?, name = ?, commentary = ? where id = ?`,
      [
        lobbies.number_of_gamers,
        lobbies.theme,
        lobbies.name,
        lobbies.commentary,
        lobbies.id,
      ]
    );
  }
}

module.exports = lobbiesManager;
