import { connection } from "./connexion.js";
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

class Users {
  static async selectUsers() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM users", (error, results) => {
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

  static async insertUser(role_id, username, firstname, lastname, telephone, email, password) {
    return new Promise(async (resolve, reject) => {
      try {
        // Crypter le mot de passe
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
        const query = "INSERT INTO users (role_id, username, firstname, lastname, telephone, email, password) VALUES (?, ?, ?, ?, ?, ?, ?)";
        const values = [role_id, username, firstname, lastname, telephone, email, hashedPassword];
        connection.query(query, values, (error, results) => {
          if (error) {
            console.error("Error executing query:", error);
            reject(error);
          } else {
            console.log("Inserted user with ID:", results.insertId);
            resolve(results);
          }
        });
      } catch (error) {
        console.error("Error hashing password:", error);
        reject(error);
      }
    });
  }

  static async updateUser(id, role_id, username, firstname, lastname, telephone, email, password) {
    return new Promise(async (resolve, reject) => {
      try {
        // Crypter le mot de passe
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
        const query = "UPDATE users SET role_id = ?, username = ?, firstname = ?, lastname = ?, telephone = ?, email = ?, password = ? WHERE id = ?";
        const values = [role_id, username, firstname, lastname, telephone, email, hashedPassword, id];
        connection.query(query, values, (error, results) => {
          if (error) {
            console.error("Error executing query:", error);
            reject(error);
          } else {
            console.log("Updated user with ID:", id);
            resolve(results);
          }
        });
      } catch (error) {
        console.error("Error hashing password:", error);
        reject(error);
      }
    });
  }

  static deleteUser(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM users WHERE id = ?";
      connection.query(query, [id], (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted user with ID:", id);
          resolve(results);
        }
      });
    });
  }



  static async comparePassword(storedPassword, candidatePassword) {
    try {
      return await bcrypt.compare(candidatePassword, storedPassword);
    } catch (error) {
      console.error("Error comparing passwords:", error);
      throw error;
    }
  }

  static getUserByUsername(username) {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM users WHERE username=?",
        [username],
        (error, results, fields) => {
          if (error) {
            console.error("Error executing query:", error);
            reject(error);
          } else {
            console.log("Query results:", results);
            resolve(results[0]);
          }
        }
      );
    });
  }
}

export { Users };
