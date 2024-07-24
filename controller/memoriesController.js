import { Memories } from "../model/memories.js"; // Assurez-vous que ce chemin est correct
import Validation from "../validation/validation.js";

class MemoriesController {
  static async getMemories(request, response) {
    try {
      const memories = await Memories.selectMemories();
      response.status(200).json(memories);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting memories.");
    }
  }

  static async createMemory(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { user_id, title_en, title_fr, location, date } = request.body;
    
    try {
      const result = await Memories.insertMemory(
        user_id, title_en, title_fr, location, date
      );
      response.status(201).json({ id: result.insertId });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating memory.");
    }
  }

  static async updateMemory(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    const { user_id, title_en, title_fr, location, date } = request.body;
    
    try {
      await Memories.updateMemory(
        id, user_id, title_en, title_fr, location, date
      );
      response.status(200).send("Memory updated successfully.");
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating memory.");
    }
  }

  static async deleteMemory(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    try {
      await Memories.deleteMemory(id);
      response.status(200).send("Memory deleted successfully.");
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting memory.");
    }
  }

  static async getMemoryById(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    try {
      const memory = await Memories.getMemoryById(id);
      response.status(200).json(memory);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting memory by ID.");
    }
  }

  static async getMemoriesByUser(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { userId } = request.params;
    try {
      const memoriesByUser = await Memories.getMemoriesByUser(userId);
      response.status(200).json(memoriesByUser);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting memories by user.");
    }
  }
}

export { MemoriesController };
