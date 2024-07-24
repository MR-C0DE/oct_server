import { connection } from "./connexion.js";

class Events {
  static selectEvents() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM events", (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Query results:", results);
          resolve(results);
        }
      });
    });
  }

  static insertEvent(user_id, title_en, title_fr, date_event, hour_begin, hour_end, address, date) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO events (user_id, title_en, title_fr, date_event, hour_begin, hour_end, address, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
      const values = [user_id, title_en, title_fr, date_event, hour_begin, hour_end, address, date];
      connection.query(query, values, (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted event with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateEvent(id, user_id, title_en, title_fr, date_event, hour_begin, hour_end, address, date) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE events SET user_id = ?, title_en = ?, title_fr = ?, date_event = ?, hour_begin = ?, hour_end = ?, address = ?, date = ? WHERE id = ?";
      const values = [user_id, title_en, title_fr, date_event, hour_begin, hour_end, address, date, id];
      connection.query(query, values, (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated event with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteEvent(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM events WHERE id = ?";
      connection.query(query, [id], (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted event with ID:", id);
          resolve(results);
        }
      });
    });
  }
}

export { Events };
