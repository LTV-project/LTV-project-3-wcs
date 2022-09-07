const AbstractManager = require("./AbstractManager");

class lobbieManager extends AbstractManager {
  constructor() {
    super({ table: "lobbie" });
  }

  insert(lobbie) {
    return this.connection.query(
      `insert into ${this.table} (number of gamers, theme, name of lobbie, commentary) values (?, ?, ?, ?)`,
      [
        lobbie.number_of_gamers,
        lobbie.theme,
        lobbie.name_of_lobbie,
        lobbie.commentary,
      ]
    );
  }

  update(lobbie) {
    return this.connection.query(
      `update ${this.table} set number of gamers = ?, theme = ?, name of lobbie = ?, commentary = ? where id = ?`,
      [
        lobbie.numberOfGamers,
        lobbie.theme,
        lobbie.nameOfLobbie,
        lobbie.commentary,
      ]
    );
  }
}

module.exports = lobbieManager;
