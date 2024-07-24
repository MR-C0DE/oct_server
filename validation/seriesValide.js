import { body, param } from "express-validator";

class SeriesValide {
  static id(str) {
    return [
      param(str)
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de la série doit être numérique et ne doit pas être vide"),
    ];
  }

  static createSeries() {
    return [
      body("title_en")
        .optional()
        .isString()
        .withMessage("Le titre en anglais doit être une chaîne de caractères"),
      body("title_fr")
        .optional()
        .isString()
        .withMessage("Le titre en français doit être une chaîne de caractères"),
      body("description_en")
        .optional()
        .isString()
        .withMessage("La description en anglais doit être une chaîne de caractères"),
      body("description_fr")
        .optional()
        .isString()
        .withMessage("La description en français doit être une chaîne de caractères"),
    ];
  }

  static updateSeries() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de la série doit être numérique et ne doit pas être vide"),
      body("title_en")
        .optional()
        .isString()
        .withMessage("Le titre en anglais doit être une chaîne de caractères"),
      body("title_fr")
        .optional()
        .isString()
        .withMessage("Le titre en français doit être une chaîne de caractères"),
      body("description_en")
        .optional()
        .isString()
        .withMessage("La description en anglais doit être une chaîne de caractères"),
      body("description_fr")
        .optional()
        .isString()
        .withMessage("La description en français doit être une chaîne de caractères"),
    ];
  }
}

export default SeriesValide;
