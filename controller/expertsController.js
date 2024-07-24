import { Experts } from "../model/experts.js"; // Assurez-vous que ce chemin est correct
import Validation from "../validation/validation.js";

class ExpertsController {
  static async getExperts(request, response) {
    try {
      const experts = await Experts.selectExperts();
      response.status(200).json(experts);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting experts.");
    }
  }

  static async createExpert(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const {
      user_id, name, title_en, title_fr, email, phone, profile, date
    } = request.body;
    
    try {
      const result = await Experts.insertExpert(
        user_id, name, title_en, title_fr, email, phone, profile, date
      );
      response.status(201).json({ id: result.insertId });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating expert.");
    }
  }

  static async updateExpert(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    const {
      user_id, name, title_en, title_fr, email, phone, profile, date
    } = request.body;
    
    try {
      await Experts.updateExpert(
        id, user_id, name, title_en, title_fr, email, phone, profile, date
      );
      response.status(200).send("Expert updated successfully.");
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating expert.");
    }
  }

  static async deleteExpert(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    try {
      await Experts.deleteExpert(id);
      response.status(200).send("Expert deleted successfully.");
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting expert.");
    }
  }

  static async getExpertById(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    try {
      const expert = await Experts.getExpertById(id);
      response.status(200).json(expert);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting expert by ID.");
    }
  }

  static async getExpertsByUser(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { userId } = request.params;
    try {
      const expertsByUser = await Experts.getExpertsByUser(userId);
      response.status(200).json(expertsByUser);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting experts by user.");
    }
  }
}

export { ExpertsController };
