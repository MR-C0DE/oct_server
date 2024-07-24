import { Router } from "express";
import { SeriesController } from "../controller/seriesController.js";
import SeriesValide from "../validation/seriesValide.js";

const routerSeries = Router();

// Récupérer toutes les séries
routerSeries.get("/", SeriesController.getSeries);

// Récupérer une série par ID
routerSeries.get("/:id", SeriesValide.id("id"), SeriesController.getSeriesById);

// Ajouter une nouvelle série
routerSeries.post("/", SeriesValide.createSeries(), SeriesController.createSeries);

// Mettre à jour les informations d'une série
routerSeries.put("/:id", SeriesValide.updateSeries(), SeriesController.updateSeries);

// Supprimer une série
routerSeries.delete("/:id", SeriesValide.id("id"), SeriesController.deleteSeries);

export default routerSeries;
