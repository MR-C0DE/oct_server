import { connection } from "./connexion.js";

class Memories {
  static selectMemories() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM memories", (error, results) => {
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

  static insertMemory(user_id, title_en, title_fr, location, date) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO memories (user_id, title_en, title_fr, location, date) VALUES (?, ?, ?, ?, ?)";
      const values = [user_id, title_en, title_fr, location, date];
      connection.query(query, values, (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted memory with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateMemory(id, user_id, title_en, title_fr, location, date) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE memories SET user_id = ?, title_en = ?, title_fr = ?, location = ?, date = ? WHERE id = ?";
      const values = [user_id, title_en, title_fr, location, date, id];
      connection.query(query, values, (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated memory with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteMemory(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM memories WHERE id = ?";
      connection.query(query, [id], (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted memory with ID:", id);
          resolve(results);
        }
      });
    });
  }
}

export { Memories };
