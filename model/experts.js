import { connection } from "./connexion.js";

class Experts {
  static selectExperts() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM experts", (error, results) => {
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

  static insertExpert(user_id, name, title_en, title_fr, email, phone, profile, date) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO experts (user_id, name, title_en, title_fr, email, phone, profile, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
      const values = [user_id, name, title_en, title_fr, email, phone, profile, date];
      connection.query(query, values, (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted expert with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateExpert(id, user_id, name, title_en, title_fr, email, phone, profile, date) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE experts SET user_id = ?, name = ?, title_en = ?, title_fr = ?, email = ?, phone = ?, profile = ?, date = ? WHERE id = ?";
      const values = [user_id, name, title_en, title_fr, email, phone, profile, date, id];
      connection.query(query, values, (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated expert with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteExpert(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM experts WHERE id = ?";
      connection.query(query, [id], (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted expert with ID:", id);
          resolve(results);
        }
      });
    });
  }
}

export { Experts };
