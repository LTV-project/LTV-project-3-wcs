const AbstractManager = require("./AbstractManager");

class ImagesManager extends AbstractManager {
  constructor() {
    super({ table: "images" });
  }

  insert(images) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [images.title]
    );
  }

  update(images) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [images.title, images.id]
    );
  }
}

module.exports = ImagesManager;
