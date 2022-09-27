const AbstractManager = require("./AbstractManager");

class lobbiesManager extends AbstractManager {
  constructor() {
    super({ table: "lobbies" });
  }

  findLobbiesByCategoryWithTravelInfosAndParticipants() {
    return this.connection.query(
      `select l.id, l.name, l.number_of_gamers, l.commentary as description, l.user_id as participants, u.pseudo, t.train_number, t.coach_number, t.seat_number, t.departure, t.arrival, t.date, c.name as category from ${this.table} as l left join travel_info as t on t.id=l.travel_infos_id left join users as u on u.id=l.user_id left join category as c on c.id=l.category_id left join participants ON l.user_id=participants.user_id;`
    );
  }

  insert(lobbies) {
    return this.connection.query(
      `insert into ${this.table} (travel_infos_id, number_of_gamers, theme, name, commentary, creator_id, category_id) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        lobbies.travel_infos_id,
        lobbies.number_of_gamers,
        lobbies.theme,
        lobbies.name,
        lobbies.commentary,
        lobbies.creator_id,
        lobbies.category_id,
      ]
    );
  }

  update(lobbies) {
    return this.connection.query(
      `update ${this.table} set number_of_gamers = ?, theme = ?, name = ?, commentary = ?, category_id = ? where id = ?`,
      [
        lobbies.number_of_gamers,
        lobbies.theme,
        lobbies.name,
        lobbies.commentary,
        lobbies.category_id,
        lobbies.id,
      ]
    );
  }
}

module.exports = lobbiesManager;
