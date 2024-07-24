import { body, param } from "express-validator";

class MessagesValide {
  static id(str) {
    return [
      param(str)
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID du message doit être numérique et ne doit pas être vide"),
    ];
  }

  static createMessage() {
    return [
      body("sender_id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'expéditeur doit être numérique"),
      body("receiver_id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID du destinataire doit être numérique"),
      body("content")
        .notEmpty()
        .isString()
        .withMessage("Le contenu du message ne doit pas être vide et doit être une chaîne de caractères"),
    ];
  }

  static updateMessage() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID du message doit être numérique et ne doit pas être vide"),
      body("content")
        .optional()
        .isString()
        .withMessage("Le contenu du message doit être une chaîne de caractères"),
    ];
  }
}

export default MessagesValide;
