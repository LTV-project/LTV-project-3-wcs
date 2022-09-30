const AbstractManager = require("./AbstractManager");

class ImagesManager extends AbstractManager {
  constructor() {
    super({ table: "images" });
  }

  insert(images) {
    return this.connection.query(
      `insert into ${this.table} (image, title) values (?, ?)`,
      [images.image, images.title]
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
