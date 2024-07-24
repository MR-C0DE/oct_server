import { Router } from "express";
import { EventsController } from "../controller/eventsController.js";
import EventsValide from "../validation/eventsValide.js";

const routerEvents = Router();

// Récupérer tous les événements
routerEvents.get("/", EventsController.getEvents);

// Récupérer un événement par ID
routerEvents.get("/:id", EventsValide.id("id"), EventsController.getEventById);

// Ajouter un nouvel événement
routerEvents.post("/", EventsValide.createEvent(), EventsController.createEvent);

// Mettre à jour les informations d'un événement
routerEvents.put("/:id", EventsValide.updateEvent(), EventsController.updateEvent);

// Supprimer un événement
routerEvents.delete("/:id", EventsValide.id("id"), EventsController.deleteEvent);

export default routerEvents;
