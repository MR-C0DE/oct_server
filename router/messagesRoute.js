import { Router } from "express";
import { MessagesController } from "../controller/messagesController.js";
import MessagesValide from "../validation/messagesValide.js";

const routerMessages = Router();

// Récupérer tous les messages
routerMessages.get("/", MessagesController.getMessages);

// Récupérer un message par ID
routerMessages.get("/:id", MessagesValide.id("id"), MessagesController.getMessageById);

// Ajouter un nouveau message
routerMessages.post("/", MessagesValide.createMessage(), MessagesController.createMessage);

// Mettre à jour les informations d'un message
routerMessages.put("/:id", MessagesValide.updateMessage(), MessagesController.updateMessage);

// Supprimer un message
routerMessages.delete("/:id", MessagesValide.id("id"), MessagesController.deleteMessage);

export default routerMessages;
