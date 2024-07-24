import { body, param } from "express-validator";

class EventsValide {
  static id(str) {
    return [
      param(str)
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'événement doit être numérique et ne doit pas être vide"),
    ];
  }

  static createEvent() {
    return [
      body("user_id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'utilisateur doit être numérique"),
      body("title_en")
        .optional()
        .isString()
        .withMessage("Le titre en anglais doit être une chaîne de caractères"),
      body("title_fr")
        .optional()
        .isString()
        .withMessage("Le titre en français doit être une chaîne de caractères"),
      body("date_event")
        .notEmpty()
        .isDate()
        .withMessage("La date de l'événement doit être une date valide"),
      body("hour_begin")
        .optional()
        .isString()
        .withMessage("L'heure de début doit être une chaîne de caractères au format HH:MM"),
      body("hour_end")
        .optional()
        .isString()
        .withMessage("L'heure de fin doit être une chaîne de caractères au format HH:MM"),
      body("address")
        .optional()
        .isString()
        .withMessage("L'adresse doit être une chaîne de caractères"),
      body("date")
        .notEmpty()
        .isDate()
        .withMessage("La date doit être une date valide"),
    ];
  }

  static updateEvent() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'événement doit être numérique et ne doit pas être vide"),
      body("user_id")
        .optional()
        .isNumeric()
        .withMessage("L'ID de l'utilisateur doit être numérique"),
      body("title_en")
        .optional()
        .isString()
        .withMessage("Le titre en anglais doit être une chaîne de caractères"),
      body("title_fr")
        .optional()
        .isString()
        .withMessage("Le titre en français doit être une chaîne de caractères"),
      body("date_event")
        .optional()
        .isDate()
        .withMessage("La date de l'événement doit être une date valide"),
      body("hour_begin")
        .optional()
        .isString()
        .withMessage("L'heure de début doit être une chaîne de caractères au format HH:MM"),
      body("hour_end")
        .optional()
        .isString()
        .withMessage("L'heure de fin doit être une chaîne de caractères au format HH:MM"),
      body("address")
        .optional()
        .isString()
        .withMessage("L'adresse doit être une chaîne de caractères"),
      body("date")
        .optional()
        .isDate()
        .withMessage("La date doit être une date valide"),
    ];
  }
}

export default EventsValide;
