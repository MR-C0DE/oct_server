import { body, param } from "express-validator";

class UsersValide {
  static id(str) {
    return [
      param(str)
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'utilisateur doit être numérique et ne doit pas être vide"),
    ];
  }

  static createUser() {
    return [
      body("role_id")
        .optional()
        .isNumeric()
        .withMessage("L'ID du rôle doit être numérique"),
      body("username")
        .notEmpty()
        .isString()
        .withMessage("Le nom d'utilisateur ne doit pas être vide"),
      body("firstname")
        .optional()
        .isString()
        .withMessage("Le prénom doit être une chaîne de caractères"),
      body("lastname")
        .optional()
        .isString()
        .withMessage("Le nom de famille doit être une chaîne de caractères"),
      body("telephone")
        .optional()
        .isString()
        .withMessage("Le numéro de téléphone doit être une chaîne de caractères"),
      body("email")
        .optional()
        .isEmail()
        .withMessage("L'email doit être une adresse email valide"),
      body("password")
        .notEmpty()
        .isLength({ min: 6 })
        .withMessage("Le mot de passe doit contenir au moins 6 caractères"),
    ];
  }

  static updateUser() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'utilisateur doit être numérique et ne doit pas être vide"),
      body("role_id")
        .optional()
        .isNumeric()
        .withMessage("L'ID du rôle doit être numérique"),
      body("username")
        .optional()
        .isString()
        .withMessage("Le nom d'utilisateur doit être une chaîne de caractères"),
      body("firstname")
        .optional()
        .isString()
        .withMessage("Le prénom doit être une chaîne de caractères"),
      body("lastname")
        .optional()
        .isString()
        .withMessage("Le nom de famille doit être une chaîne de caractères"),
      body("telephone")
        .optional()
        .isString()
        .withMessage("Le numéro de téléphone doit être une chaîne de caractères"),
      body("email")
        .optional()
        .isEmail()
        .withMessage("L'email doit être une adresse email valide"),
      body("password")
        .optional()
        .isLength({ min: 6 })
        .withMessage("Le mot de passe doit contenir au moins 6 caractères"),
    ];
  }
}

export default UsersValide;
