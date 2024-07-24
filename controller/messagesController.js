import { Messages } from "../model/messages.js"; // Assurez-vous que ce chemin est correct
import Validation from "../validation/validation.js";

class MessagesController {
  static async getMessages(request, response) {
    try {
      const messages = await Messages.selectMessages();
      response.status(200).json(messages);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting messages.");
    }
  }

  static async createMessage(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { name, email, content, date } = request.body;

    try {
      const result = await Messages.insertMessage(name, email, content, date);
      response.status(201).json({ id: result.insertId });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating message.");
    }
  }

  static async updateMessage(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    const { name, email, content, date } = request.body;

    try {
      await Messages.updateMessage(id, name, email, content, date);
      response.status(200).send("Message updated successfully.");
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating message.");
    }
  }

  static async deleteMessage(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    try {
      await Messages.deleteMessage(id);
      response.status(200).send("Message deleted successfully.");
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting message.");
    }
  }

  static async getMessageById(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    try {
      const message = await Messages.getMessageById(id);
      response.status(200).json(message);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting message by ID.");
    }
  }
}

export { MessagesController };
