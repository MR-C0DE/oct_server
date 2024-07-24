import { connection } from "./connexion.js";

class Sermons {
  static selectSermons() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM sermons", (error, results) => {
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

  static insertSermon(user_id, day, month, location, date_sermon, title_en, title_fr, duration, date) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO sermons (user_id, day, month, location, date_sermon, title_en, title_fr, duration, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
      const values = [user_id, day, month, location, date_sermon, title_en, title_fr, duration, date];
      connection.query(query, values, (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted sermon with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateSermon(id, user_id, day, month, location, date_sermon, title_en, title_fr, duration, date) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE sermons SET user_id = ?, day = ?, month = ?, location = ?, date_sermon = ?, title_en = ?, title_fr = ?, duration = ?, date = ? WHERE id = ?";
      const values = [user_id, day, month, location, date_sermon, title_en, title_fr, duration, date, id];
      connection.query(query, values, (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated sermon with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteSermon(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM sermons WHERE id = ?";
      connection.query(query, [id], (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted sermon with ID:", id);
          resolve(results);
        }
      });
    });
  }
}

export { Sermons };
