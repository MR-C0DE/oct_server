import { body, param } from "express-validator";

class WordsOfTheDayValide {
  static id(str) {
    return [
      param(str)
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID du mot du jour doit être numérique et ne doit pas être vide"),
    ];
  }

  static createWordOfTheDay() {
    return [
      body("user_id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'utilisateur doit être numérique"),
      body("word_en")
        .optional()
        .isString()
        .withMessage("Le mot en anglais doit être une chaîne de caractères"),
      body("word_fr")
        .optional()
        .isString()
        .withMessage("Le mot en français doit être une chaîne de caractères"),
      body("bible_quote_en")
        .optional()
        .isString()
        .withMessage("La citation biblique en anglais doit être une chaîne de caractères"),
      body("bible_quote_fr")
        .optional()
        .isString()
        .withMessage("La citation biblique en français doit être une chaîne de caractères"),
      body("ref_bible_quote_en")
        .optional()
        .isString()
        .withMessage("La référence de la citation biblique en anglais doit être une chaîne de caractères"),
      body("ref_bible_quote_fr")
        .optional()
        .isString()
        .withMessage("La référence de la citation biblique en français doit être une chaîne de caractères"),
      body("quote_en")
        .optional()
        .isString()
        .withMessage("La citation en anglais doit être une chaîne de caractères"),
      body("quote_fr")
        .optional()
        .isString()
        .withMessage("La citation en français doit être une chaîne de caractères"),
      body("quote_ref_en")
        .optional()
        .isString()
        .withMessage("La référence de la citation en anglais doit être une chaîne de caractères"),
      body("quote_ref_fr")
        .optional()
        .isString()
        .withMessage("La référence de la citation en français doit être une chaîne de caractères"),
      body("quote_author")
        .optional()
        .isString()
        .withMessage("L'auteur de la citation doit être une chaîne de caractères"),
      body("date")
        .notEmpty()
        .isDate()
        .withMessage("La date doit être une date valide"),
    ];
  }

  static updateWordOfTheDay() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID du mot du jour doit être numérique et ne doit pas être vide"),
      body("user_id")
        .optional()
        .isNumeric()
        .withMessage("L'ID de l'utilisateur doit être numérique"),
      body("word_en")
        .optional()
        .isString()
        .withMessage("Le mot en anglais doit être une chaîne de caractères"),
      body("word_fr")
        .optional()
        .isString()
        .withMessage("Le mot en français doit être une chaîne de caractères"),
      body("bible_quote_en")
        .optional()
        .isString()
        .withMessage("La citation biblique en anglais doit être une chaîne de caractères"),
      body("bible_quote_fr")
        .optional()
        .isString()
        .withMessage("La citation biblique en français doit être une chaîne de caractères"),
      body("ref_bible_quote_en")
        .optional()
        .isString()
        .withMessage("La référence de la citation biblique en anglais doit être une chaîne de caractères"),
      body("ref_bible_quote_fr")
        .optional()
        .isString()
        .withMessage("La référence de la citation biblique en français doit être une chaîne de caractères"),
      body("quote_en")
        .optional()
        .isString()
        .withMessage("La citation en anglais doit être une chaîne de caractères"),
      body("quote_fr")
        .optional()
        .isString()
        .withMessage("La citation en français doit être une chaîne de caractères"),
      body("quote_ref_en")
        .optional()
        .isString()
        .withMessage("La référence de la citation en anglais doit être une chaîne de caractères"),
      body("quote_ref_fr")
        .optional()
        .isString()
        .withMessage("La référence de la citation en français doit être une chaîne de caractères"),
      body("quote_author")
        .optional()
        .isString()
        .withMessage("L'auteur de la citation doit être une chaîne de caractères"),
      body("date")
        .optional()
        .isDate()
        .withMessage("La date doit être une date valide"),
    ];
  }
}

export default WordsOfTheDayValide;
