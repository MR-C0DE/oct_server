import { body } from "express-validator";

class LoginValide {
  static connect() {
    return [];
  }
  static connectUser() {
    return [

      body("username")
        .notEmpty()
        .isString()
        .withMessage("Le nom d'utilisateur ne doit pas être vide"),

      body("password")
        .notEmpty()
        .isLength({ min: 6 })
        .withMessage("Le mot de passe doit contenir au moins 6 caractères"),
    ];
  }
}

export default LoginValide;
