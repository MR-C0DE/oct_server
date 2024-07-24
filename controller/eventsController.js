import { Events } from "../model/events.js"; // Assurez-vous que ce chemin est correct
import Validation from "../validation/validation.js";

class EventsController {
  static async getEvents(request, response) {
    try {
      const events = await Events.selectEvents();
      response.status(200).json(events);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting events.");
    }
  }

  static async createEvent(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const {
      user_id, title_en, title_fr, date_event, hour_begin, hour_end,
      address, date
    } = request.body;
    
    try {
      const result = await Events.insertEvent(
        user_id, title_en, title_fr, date_event, hour_begin, hour_end,
        address, date
      );
      response.status(201).json({ id: result.insertId });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating event.");
    }
  }

  static async updateEvent(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    const {
      user_id, title_en, title_fr, date_event, hour_begin, hour_end,
      address, date
    } = request.body;
    
    try {
      await Events.updateEvent(
        id, user_id, title_en, title_fr, date_event, hour_begin, hour_end,
        address, date
      );
      response.status(200).send("Event updated successfully.");
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating event.");
    }
  }

  static async deleteEvent(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    try {
      await Events.deleteEvent(id);
      response.status(200).send("Event deleted successfully.");
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting event.");
    }
  }

  static async getEventById(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    try {
      const event = await Events.getEventById(id);
      response.status(200).json(event);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting event by ID.");
    }
  }

  static async getEventsByUser(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { userId } = request.params;
    try {
      const eventsByUser = await Events.getEventsByUser(userId);
      response.status(200).json(eventsByUser);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting events by user.");
    }
  }
}

export { EventsController };
