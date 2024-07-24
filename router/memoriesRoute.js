import { Router } from "express";
import { MemoriesController } from "../controller/memoriesController.js";
import MemoriesValide from "../validation/memoriesValide.js";

const routerMemories = Router();

// Récupérer toutes les mémoires
routerMemories.get("/", MemoriesController.getMemories);

// Récupérer une mémoire par ID
routerMemories.get("/:id", MemoriesValide.id("id"), MemoriesController.getMemoryById);

// Ajouter une nouvelle mémoire
routerMemories.post("/", MemoriesValide.createMemory(), MemoriesController.createMemory);

// Mettre à jour les informations d'une mémoire
routerMemories.put("/:id", MemoriesValide.updateMemory(), MemoriesController.updateMemory);

// Supprimer une mémoire
routerMemories.delete("/:id", MemoriesValide.id("id"), MemoriesController.deleteMemory);

export default routerMemories;
