const AbstractManager = require("./AbstractManager");

class ImagesManager extends AbstractManager {
  constructor() {
    super({ table: "images" });
  }

  insert(images) {
    return this.connection.query(
      `insert into ${this.table} (user_id, image, title) values (?, ?, ?)`,
      [images.user_id, images.image, images.title]
    );
  }

  update(images) {
    return this.connection.query(
      `update ${this.table} set image = ?, title = ? where id = ?`,
      [images.image, images.title, images.id]
    );
  }
}

module.exports = ImagesManager;
