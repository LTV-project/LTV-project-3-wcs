const AbstractManager = require("./AbstractManager");

class ImagesManager extends AbstractManager {
  constructor() {
    super({ table: "images" });
  }

  insert(images) {
    return this.connection.query(
      `insert into ${this.table} (url_image, title) values (?, ?)`,
      [images.url_image, images.title]
    );
  }

  update(images) {
    return this.connection.query(
      `update ${this.table} set url_image = ?, title = ? where id = ?`,
      [images.url_image, images.title, images.id]
    );
  }
}

module.exports = ImagesManager;
