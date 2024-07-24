import { body, param } from "express-validator";

class ExpertsValide {
  static id(str) {
    return [
      param(str)
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'expert doit être numérique et ne doit pas être vide"),
    ];
  }

  static createExpert() {
    return [
      body("name")
        .notEmpty()
        .isString()
        .withMessage("Le nom de l'expert ne doit pas être vide et doit être une chaîne de caractères"),
      body("specialization")
        .optional()
        .isString()
        .withMessage("La spécialisation de l'expert doit être une chaîne de caractères"),
      body("contact")
        .optional()
        .isString()
        .withMessage("Les coordonnées de l'expert doivent être une chaîne de caractères"),
    ];
  }

  static updateExpert() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'expert doit être numérique et ne doit pas être vide"),
      body("name")
        .optional()
        .isString()
        .withMessage("Le nom de l'expert doit être une chaîne de caractères"),
      body("specialization")
        .optional()
        .isString()
        .withMessage("La spécialisation de l'expert doit être une chaîne de caractères"),
      body("contact")
        .optional()
        .isString()
        .withMessage("Les coordonnées de l'expert doivent être une chaîne de caractères"),
    ];
  }
}

export default ExpertsValide;
