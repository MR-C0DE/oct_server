import { Router } from "express";
import { SermonsController } from "../controller/sermonsController.js";
import SermonsValide from "../validation/sermonsValide.js";

const routerSermons = Router();

// Récupérer tous les sermons
routerSermons.get("/", SermonsController.getSermons);

// Récupérer un sermon par ID
routerSermons.get("/:id", SermonsValide.id("id"), SermonsController.getSermonById);

// Ajouter un nouveau sermon
routerSermons.post("/", SermonsValide.createSermon(), SermonsController.createSermon);

// Mettre à jour les informations d'un sermon
routerSermons.put("/:id", SermonsValide.updateSermon(), SermonsController.updateSermon);

// Supprimer un sermon
routerSermons.delete("/:id", SermonsValide.id("id"), SermonsController.deleteSermon);

export default routerSermons;
