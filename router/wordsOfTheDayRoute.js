import { Router } from "express";
import { WordsOfTheDayController } from "../controller/wordsOfTheDayController.js";
import WordsOfTheDayValide from "../validation/wordsOfTheDayValide.js";

const routerWordsOfTheDay = Router();

// Récupérer tous les mots du jour
routerWordsOfTheDay.get("/", WordsOfTheDayController.getWordsOfTheDay);

// Récupérer un mot du jour par ID
routerWordsOfTheDay.get("/:id", WordsOfTheDayValide.id("id"), WordsOfTheDayController.getWordOfTheDayById);

// Ajouter un nouveau mot du jour
routerWordsOfTheDay.post("/", WordsOfTheDayValide.createWordOfTheDay(), WordsOfTheDayController.createWordOfTheDay);

// Mettre à jour les informations d'un mot du jour
routerWordsOfTheDay.put("/:id", WordsOfTheDayValide.updateWordOfTheDay(), WordsOfTheDayController.updateWordOfTheDay);

// Supprimer un mot du jour
routerWordsOfTheDay.delete("/:id", WordsOfTheDayValide.id("id"), WordsOfTheDayController.deleteWordOfTheDay);

export default routerWordsOfTheDay;
