const AbstractManager = require("./AbstractManager");

class lobbiesManager extends AbstractManager {
  constructor() {
    super({ table: "lobbies" });
  }

  findLobbiesByCategoryWithTravelInfosAndParticipants() {
    return this.connection.query(
      `select l.name_of_lobbie, l.number_of_gamers, l.commentary as description, u.pseudo, t.train_number, t.coach_number, t.seat_number, t.od, t.date from ${this.table} as l inner join travel_info as t on t.id=l.travel_infos_id inner join users as u on u.id=l.creator_id;`
    );
  }

  insert(lobbies) {
    return this.connection.query(
      `insert into ${this.table} (travel_infos_id, number_of_gamers, theme, name_of_lobbie, commentary, creator_id) values (?, ?, ?, ?, ?, ?)`,
      [
        lobbies.travel_infos_id,
        lobbies.number_of_gamers,
        lobbies.theme,
        lobbies.name_of_lobbie,
        lobbies.commentary,
        lobbies.creator_id,
      ]
    );
  }

  update(lobbies) {
    return this.connection.query(
      `update ${this.table} set number_of_gamers = ?, theme = ?, name_of_lobbie = ?, commentary = ? where id = ?`,
      [
        lobbies.number_of_gamers,
        lobbies.theme,
        lobbies.name_of_lobbie,
        lobbies.commentary,
        lobbies.id,
      ]
    );
  }
}

module.exports = lobbiesManager;
