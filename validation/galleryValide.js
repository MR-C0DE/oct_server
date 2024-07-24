import { body, param } from "express-validator";

class GalleryValide {
  static id(str) {
    return [
      param(str)
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'image doit être numérique et ne doit pas être vide"),
    ];
  }

  static createGalleryImage() {
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
      body("url")
        .notEmpty()
        .isString()
        .withMessage("L'URL de l'image doit être une chaîne de caractères"),
    ];
  }

  static updateGalleryImage() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'image doit être numérique et ne doit pas être vide"),
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
      body("url")
        .optional()
        .isString()
        .withMessage("L'URL de l'image doit être une chaîne de caractères"),
    ];
  }
}

export default GalleryValide;
