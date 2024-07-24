import { connection } from "./connexion.js";

class Gallery {
  static selectGallery() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM gallery", (error, results) => {
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

  static insertGallery(series_id, user_id, image, date) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO gallery (series_id, user_id, image, date) VALUES (?, ?, ?, ?)";
      const values = [series_id, user_id, image, date];
      connection.query(query, values, (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted gallery with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateGallery(id, series_id, user_id, image, date) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE gallery SET series_id = ?, user_id = ?, image = ?, date = ? WHERE id = ?";
      const values = [series_id, user_id, image, date, id];
      connection.query(query, values, (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated gallery with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteGallery(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM gallery WHERE id = ?";
      connection.query(query, [id], (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted gallery with ID:", id);
          resolve(results);
        }
      });
    });
  }
}

export { Gallery };
