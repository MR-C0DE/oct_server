import { Router } from "express";
import { GalleryController } from "../controller/galleryController.js";
import GalleryValide from "../validation/galleryValide.js";

const routerGallery = Router();

// Récupérer toutes les images de la galerie
routerGallery.get("/", GalleryController.getGallery);

// Récupérer une image de la galerie par ID
routerGallery.get("/:id", GalleryValide.id("id"), GalleryController.getGalleryImageById);

// Ajouter une nouvelle image à la galerie
routerGallery.post("/", GalleryValide.createGalleryImage(), GalleryController.createGalleryImage);

// Mettre à jour les informations d'une image de la galerie
routerGallery.put("/:id", GalleryValide.updateGalleryImage(), GalleryController.updateGalleryImage);

// Supprimer une image de la galerie
routerGallery.delete("/:id", GalleryValide.id("id"), GalleryController.deleteGalleryImage);

export default routerGallery;
