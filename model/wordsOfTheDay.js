import { connection } from "./connexion.js";

class WordsOfTheDay {
  static selectWordsOfTheDay() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM words_of_the_day", (error, results) => {
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

  static insertWordOfTheDay(user_id, word_en, word_fr, bible_quote_en, bible_quote_fr, ref_bible_quote_en, ref_bible_quote_fr, quote_en, quote_fr, quote_ref_en, quote_ref_fr, quote_author, date) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO words_of_the_day (user_id, word_en, word_fr, bible_quote_en, bible_quote_fr, ref_bible_quote_en, ref_bible_quote_fr, quote_en, quote_fr, quote_ref_en, quote_ref_fr, quote_author, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
      const values = [user_id, word_en, word_fr, bible_quote_en, bible_quote_fr, ref_bible_quote_en, ref_bible_quote_fr, quote_en, quote_fr, quote_ref_en, quote_ref_fr, quote_author, date];
      connection.query(query, values, (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted word_of_the_day with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateWordOfTheDay(id, user_id, word_en, word_fr, bible_quote_en, bible_quote_fr, ref_bible_quote_en, ref_bible_quote_fr, quote_en, quote_fr, quote_ref_en, quote_ref_fr, quote_author, date) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE words_of_the_day SET user_id = ?, word_en = ?, word_fr = ?, bible_quote_en = ?, bible_quote_fr = ?, ref_bible_quote_en = ?, ref_bible_quote_fr = ?, quote_en = ?, quote_fr = ?, quote_ref_en = ?, quote_ref_fr = ?, quote_author = ?, date = ? WHERE id = ?";
      const values = [user_id, word_en, word_fr, bible_quote_en, bible_quote_fr, ref_bible_quote_en, ref_bible_quote_fr, quote_en, quote_fr, quote_ref_en, quote_ref_fr, quote_author, date, id];
      connection.query(query, values, (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated word_of_the_day with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteWordOfTheDay(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM words_of_the_day WHERE id = ?";
      connection.query(query, [id], (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted word_of_the_day with ID:", id);
          resolve(results);
        }
      });
    });
  }
}

export { WordsOfTheDay };
