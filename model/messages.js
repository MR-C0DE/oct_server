import { connection } from "./connexion.js";

class Messages {
  static selectMessages() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM messages", (error, results) => {
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

  static insertMessage(name, email, content, date) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO messages (name, email, content, date) VALUES (?, ?, ?, ?)";
      const values = [name, email, content, date];
      connection.query(query, values, (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted message with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateMessage(id, name, email, content, date) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE messages SET name = ?, email = ?, content = ?, date = ? WHERE id = ?";
      const values = [name, email, content, date, id];
      connection.query(query, values, (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated message with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteMessage(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM messages WHERE id = ?";
      connection.query(query, [id], (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted message with ID:", id);
          resolve(results);
        }
      });
    });
  }
}

export { Messages };
