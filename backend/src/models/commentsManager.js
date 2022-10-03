const AbstractManager = require("./AbstractManager");

class CommentsManager extends AbstractManager {
  constructor() {
    super({ table: "comments" });
  }

  insert(comment) {
    return this.connection.query(
      `insert into ${this.table} (description) values (?)`,
      [comment.description]
    );
  }

  update(comment) {
    return this.connection.query(
      `update ${this.table} set description = ? where id = ?`,
      [comment.description, comment.id]
    );
  }
}

module.exports = CommentsManager;
