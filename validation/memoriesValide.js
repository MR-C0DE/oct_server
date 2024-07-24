import { body, param } from "express-validator";

class MemoriesValide {
  static id(str) {
    return [
      param(str)
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de la mémoire doit être numérique et ne doit pas être vide"),
    ];
  }

  static createMemory() {
    return [
      body("user_id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'utilisateur doit être numérique"),
      body("memory_en")
        .optional()
        .isString()
        .withMessage("La mémoire en anglais doit être une chaîne de caractères"),
      body("memory_fr")
        .optional()
        .isString()
        .withMessage("La mémoire en français doit être une chaîne de caractères"),
      body("date")
        .notEmpty()
        .isDate()
        .withMessage("La date doit être une date valide"),
    ];
  }

  static updateMemory() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de la mémoire doit être numérique et ne doit pas être vide"),
      body("user_id")
        .optional()
        .isNumeric()
        .withMessage("L'ID de l'utilisateur doit être numérique"),
      body("memory_en")
        .optional()
        .isString()
        .withMessage("La mémoire en anglais doit être une chaîne de caractères"),
      body("memory_fr")
        .optional()
        .isString()
        .withMessage("La mémoire en français doit être une chaîne de caractères"),
      body("date")
        .optional()
        .isDate()
        .withMessage("La date doit être une date valide"),
    ];
  }
}

export default MemoriesValide;
