import { Sermons } from "../model/sermons.js"; // Assurez-vous que ce chemin est correct
import Validation from "../validation/validation.js";

class SermonsController {
  static async getSermons(request, response) {
    try {
      const sermons = await Sermons.selectSermons();
      response.status(200).json(sermons);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting sermons.");
    }
  }

  static async createSermon(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const {
      user_id, day, month, location, date_sermon, title_en, title_fr,
      duration, date
    } = request.body;
    
    try {
      const result = await Sermons.insertSermon(
        user_id, day, month, location, date_sermon, title_en, title_fr,
        duration, date
      );
      response.status(201).json({ id: result.insertId });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating sermon.");
    }
  }

  static async updateSermon(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    const {
      user_id, day, month, location, date_sermon, title_en, title_fr,
      duration, date
    } = request.body;
    
    try {
      await Sermons.updateSermon(
        id, user_id, day, month, location, date_sermon, title_en, title_fr,
        duration, date
      );
      response.status(200).send("Sermon updated successfully.");
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating sermon.");
    }
  }

  static async deleteSermon(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    try {
      await Sermons.deleteSermon(id);
      response.status(200).send("Sermon deleted successfully.");
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting sermon.");
    }
  }

  static async getSermonById(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    try {
      const sermon = await Sermons.getSermonById(id);
      response.status(200).json(sermon);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting sermon by ID.");
    }
  }

  static async getSermonsByUser(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { userId } = request.params;
    try {
      const sermonsByUser = await Sermons.getSermonsByUser(userId);
      response.status(200).json(sermonsByUser);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting sermons by user.");
    }
  }
}

export { SermonsController };
