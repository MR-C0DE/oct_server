import { Router } from "express";
import { ExpertsController } from "../controller/expertsController.js";
import ExpertsValide from "../validation/expertsValide.js";

const routerExperts = Router();

// Récupérer tous les experts
routerExperts.get("/", ExpertsController.getExperts);

// Récupérer un expert par ID
routerExperts.get("/:id", ExpertsValide.id("id"), ExpertsController.getExpertById);

// Ajouter un nouvel expert
routerExperts.post("/", ExpertsValide.createExpert(), ExpertsController.createExpert);

// Mettre à jour les informations d'un expert
routerExperts.put("/:id", ExpertsValide.updateExpert(), ExpertsController.updateExpert);

// Supprimer un expert
routerExperts.delete("/:id", ExpertsValide.id("id"), ExpertsController.deleteExpert);

// Récupérer les experts par utilisateur
routerExperts.get("/user/:userId", ExpertsValide.id("userId"), ExpertsController.getExpertsByUser);

export default routerExperts;
