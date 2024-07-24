import { Gallery } from "../model/gallery.js"; // Assurez-vous que ce chemin est correct
import Validation from "../validation/validation.js";

class GalleryController {
  static async getGallery(request, response) {
    try {
      const gallery = await Gallery.selectGallery();
      response.status(200).json(gallery);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting gallery.");
    }
  }

  static async createGalleryImage(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { series_id, user_id, image, date } = request.body;

    try {
      const result = await Gallery.insertGalleryImage(
        series_id, user_id, image, date
      );
      response.status(201).json({ id: result.insertId });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating gallery image.");
    }
  }

  static async updateGalleryImage(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    const { series_id, user_id, image, date } = request.body;

    try {
      await Gallery.updateGalleryImage(
        id, series_id, user_id, image, date
      );
      response.status(200).send("Gallery image updated successfully.");
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating gallery image.");
    }
  }

  static async deleteGalleryImage(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    try {
      await Gallery.deleteGalleryImage(id);
      response.status(200).send("Gallery image deleted successfully.");
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting gallery image.");
    }
  }

  static async getGalleryImageById(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    try {
      const galleryImage = await Gallery.getGalleryImageById(id);
      response.status(200).json(galleryImage);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting gallery image by ID.");
    }
  }

  static async getGalleryBySeries(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { seriesId } = request.params;
    try {
      const galleryBySeries = await Gallery.getGalleryBySeries(seriesId);
      response.status(200).json(galleryBySeries);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting gallery by series.");
    }
  }
}

export { GalleryController };
