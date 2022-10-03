const AbstractManager = require("./AbstractManager");

class TravelInfosManager extends AbstractManager {
  constructor() {
    super({ table: "travel_info" });
  }

  insert(travelInfo) {
    return this.connection.query(
      `insert into ${this.table} (train_number, coach_number, seat_number, date, arrival, departure) values (?, ?, ?, ?, ?, ?)`,
      [
        travelInfo.train_number,
        travelInfo.coach_number,
        travelInfo.seat_number,
        travelInfo.date,
        travelInfo.arrival,
        travelInfo.departure,
      ]
    );
  }

  update(travelInfo) {
    return this.connection.query(
      `update ${this.table} set train_number = ?, coach_number = ?, seat_number = ?, date = ?, arrival = ?, departure = ? where id = ?`,
      [
        travelInfo.train_number,
        travelInfo.coach_number,
        travelInfo.seat_number,
        travelInfo.date,
        travelInfo.arrival,
        travelInfo.departure,
        travelInfo.id,
      ]
    );
  }
}

module.exports = TravelInfosManager;
