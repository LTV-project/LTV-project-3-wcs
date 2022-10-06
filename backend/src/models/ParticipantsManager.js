const AbstractManager = require("./AbstractManager");

class participantsManager extends AbstractManager {
  constructor() {
    super({ table: "participants" });
  }

  insert(participants) {
    return this.connection.query(
      `insert into ${this.table} (user_id, lobbie_id) values (?, ?)`,
      [participants.user_id, participants.lobby_id]
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
