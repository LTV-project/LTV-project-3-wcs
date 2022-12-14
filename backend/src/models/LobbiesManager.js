const AbstractManager = require("./AbstractManager");

class lobbiesManager extends AbstractManager {
  constructor() {
    super({ table: "lobbies" });
  }

  findLobbiesByCategoryWithTravelInfosAndCreator() {
    return this.connection.query(
      `select l.id, l.category_id, l.name, l.number_of_gamers, l.commentary as description, l.user_id, u.pseudo as host, u.image as avatar, g.name as game, g.id as game_id, t.train_number, t.coach_number, t.seat_number, t.departure, t.arrival, t.date, c.name as category from ${this.table} as l left join games g on g.id=l.game_id left join travel_info t on t.id=l.travel_infos_id left join users u on u.id=l.user_id left join category as c on c.id=l.category_id;`
    );
  }

  findLobbyByCategoryWithTravelInfosAndCreator(lobbyId) {
    return this.connection.query(
      `select l.id, l.category_id, l.name, l.number_of_gamers, l.commentary as description, u.pseudo as host, u.image as avatar, u.id, g.name as game, g.id as game_id, t.train_number, t.coach_number, t.seat_number, t.departure, t.arrival, t.date, c.name as category from ${this.table} as l left join games g on g.id=l.game_id left join travel_info t on t.id=l.travel_infos_id left join users u on u.id=l.user_id left join category as c on c.id=l.category_id where l.id = ?;`,
      [lobbyId]
    );
  }

  findLobbyCreatedByUser(userId) {
    return this.connection.query(
      `select l.id as lobby_id, l.category_id, l.name, l.number_of_gamers, l.commentary as description, u.pseudo as host, u.image as avatar, u.id, g.name as game, g.id as game_id, t.train_number, t.coach_number, t.seat_number, t.departure, t.arrival, t.date, c.name as category from ${this.table} as l left join games g on g.id=l.game_id left join travel_info t on t.id=l.travel_infos_id left join users u on u.id=l.user_id left join category as c on c.id=l.category_id where u.id = ?;`,
      [userId]
    );
  }

  insert(lobbies) {
    return this.connection.query(
      `insert into ${this.table} (travel_infos_id, number_of_gamers, theme, name, commentary, game_id, user_id, category_id) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        lobbies.travel_infos_id,
        lobbies.number_of_gamers,
        lobbies.theme,
        lobbies.name,
        lobbies.commentary,
        lobbies.game_id,
        lobbies.user_id,
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
