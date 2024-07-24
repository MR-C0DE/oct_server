import { Series } from "../model/series.js"; // Assurez-vous que ce chemin est correct
import Validation from "../validation/validation.js";

class SeriesController {
  static async getSeries(request, response) {
    try {
      const series = await Series.selectSeries();
      response.status(200).json(series);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting series.");
    }
  }

  static async createSeries(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const {
      user_id, memories_id, cover_photo, date_series, subject_en, subject_fr, date
    } = request.body;
    
    try {
      const result = await Series.insertSeries(
        user_id, memories_id, cover_photo, date_series, subject_en, subject_fr, date
      );
      response.status(201).json({ id: result.insertId });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating series.");
    }
  }

  static async updateSeries(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    const {
      user_id, memories_id, cover_photo, date_series, subject_en, subject_fr, date
    } = request.body;
    
    try {
      await Series.updateSeries(
        id, user_id, memories_id, cover_photo, date_series, subject_en, subject_fr, date
      );
      response.status(200).send("Series updated successfully.");
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating series.");
    }
  }

  static async deleteSeries(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    try {
      await Series.deleteSeries(id);
      response.status(200).send("Series deleted successfully.");
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting series.");
    }
  }

  static async getSeriesById(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    try {
      const series = await Series.getSeriesById(id);
      response.status(200).json(series);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting series by ID.");
    }
  }

  static async getSeriesByUser(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { userId } = request.params;
    try {
      const seriesByUser = await Series.getSeriesByUser(userId);
      response.status(200).json(seriesByUser);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting series by user.");
    }
  }
}

export { SeriesController };
