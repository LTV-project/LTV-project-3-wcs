const AbstractManager = require("./AbstractManager");

class participantsManager extends AbstractManager {
  constructor() {
    super({ table: "participants" });
  }

  findAllParticipantsFromLobby(id) {
    return this.connection.query(
      `SELECT u.pseudo AS participants, u.id, p.lobbie_id, l.user_id, p.id FROM users u
      LEFT JOIN ${this.table} p ON u.id=p.user_id
      LEFT JOIN lobbies l ON l.id=p.lobbie_id
      WHERE l.id = ?
      `,
      [id]
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
