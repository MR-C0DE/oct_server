import { WordsOfTheDay } from "../model/wordsOfTheDay.js"; // Assurez-vous que ce chemin est correct
import Validation from "../validation/validation.js";

class WordsOfTheDayController {
  static async getWordsOfTheDay(request, response) {
    try {
      const words = await WordsOfTheDay.selectWordsOfTheDay();
      response.status(200).json(words);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting words of the day.");
    }
  }

  static async createWordOfTheDay(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const {
      user_id, word_en, word_fr, bible_quote_en, bible_quote_fr, 
      ref_bible_quote_en, ref_bible_quote_fr, quote_en, quote_fr, 
      quote_ref_en, quote_ref_fr, quote_author, date
    } = request.body;
    
    try {
      const result = await WordsOfTheDay.insertWordOfTheDay(
        user_id, word_en, word_fr, bible_quote_en, bible_quote_fr,
        ref_bible_quote_en, ref_bible_quote_fr, quote_en, quote_fr,
        quote_ref_en, quote_ref_fr, quote_author, date
      );
      response.status(201).json({ id: result.insertId });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating word of the day.");
    }
  }

  static async updateWordOfTheDay(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    const {
      user_id, word_en, word_fr, bible_quote_en, bible_quote_fr, 
      ref_bible_quote_en, ref_bible_quote_fr, quote_en, quote_fr, 
      quote_ref_en, quote_ref_fr, quote_author, date
    } = request.body;
    
    try {
      await WordsOfTheDay.updateWordOfTheDay(
        id, user_id, word_en, word_fr, bible_quote_en, bible_quote_fr,
        ref_bible_quote_en, ref_bible_quote_fr, quote_en, quote_fr,
        quote_ref_en, quote_ref_fr, quote_author, date
      );
      response.status(200).send("Word of the day updated successfully.");
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating word of the day.");
    }
  }

  static async deleteWordOfTheDay(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    try {
      await WordsOfTheDay.deleteWordOfTheDay(id);
      response.status(200).send("Word of the day deleted successfully.");
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting word of the day.");
    }
  }

  static async getWordOfTheDayById(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    try {
      const word = await WordsOfTheDay.getWordOfTheDayById(id);
      response.status(200).json(word);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting word of the day by ID.");
    }
  }

  static async getWordsOfTheDayByUser(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { userId } = request.params;
    try {
      const wordsByUser = await WordsOfTheDay.getWordsOfTheDayByUser(userId);
      response.status(200).json(wordsByUser);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting words of the day by user.");
    }
  }
}

export { WordsOfTheDayController };
