const AbstractManager = require("./AbstractManager");

class participantsManager extends AbstractManager {
  constructor() {
    super({ table: "participants" });
  }

  findAllParticipantsFromLobby() {
    return this.connection.query(
      `SELECT u.pseudo AS participants, u.id AS id FROM users u
      INNER JOIN ${this.table} p ON u.id=p.user_id
      INNER JOIN lobbies l ON l.id=p.lobbie_id`
    );
  }

  insert(participants) {
    return this.connection.query(
      `insert into ${this.table} (user_id, lobbie_id) values (?, ?)`,
      [participants.user_id, participants.lobbie_id]
    );
  }

  update(participants) {
    return this.connection.query(
      `update ${this.table} set user_id = ?, lobbi_id = ?`,
      [participants.user_id, participants.lobbie_id]
    );
  }
}

module.exports = participantsManager;
