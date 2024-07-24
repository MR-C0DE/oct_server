import { connection } from "./connexion.js";

class Roles {
  static selectRoles() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM roles", (error, results) => {
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

  static insertRole(name) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO roles (name) VALUES (?)";
      connection.query(query, [name], (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted role with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateRole(id, name) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE roles SET name = ? WHERE id = ?";
      connection.query(query, [name, id], (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated role with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteRole(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM roles WHERE id = ?";
      connection.query(query, [id], (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted role with ID:", id);
          resolve(results);
        }
      });
    });
  }
}

export { Roles };
