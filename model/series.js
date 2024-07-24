import { connection } from "./connexion.js";

class Series {
  static selectSeries() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM series", (error, results) => {
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

  static insertSeries(user_id, memories_id, cover_photo, date_series, subject_en, subject_fr, date) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO series (user_id, memories_id, cover_photo, date_series, subject_en, subject_fr, date) VALUES (?, ?, ?, ?, ?, ?, ?)";
      const values = [user_id, memories_id, cover_photo, date_series, subject_en, subject_fr, date];
      connection.query(query, values, (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted series with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateSeries(id, user_id, memories_id, cover_photo, date_series, subject_en, subject_fr, date) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE series SET user_id = ?, memories_id = ?, cover_photo = ?, date_series = ?, subject_en = ?, subject_fr = ?, date = ? WHERE id = ?";
      const values = [user_id, memories_id, cover_photo, date_series, subject_en, subject_fr, date, id];
      connection.query(query, values, (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated series with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteSeries(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM series WHERE id = ?";
      connection.query(query, [id], (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted series with ID:", id);
          resolve(results);
        }
      });
    });
  }
}

export { Series };
