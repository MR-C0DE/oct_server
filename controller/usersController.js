import { Users } from "../model/users.js"; // Assurez-vous que ce chemin est correct
import Validation from "../validation/validation.js";

class UsersController {
  static async getUsers(request, response) {
    try {
      const users = await Users.selectUsers();
      response.status(200).json(users);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting users.");
    }
  }

  static async createUser(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { role_id, username, firstname, lastname, telephone, email, password } = request.body;
    try {
      const result = await Users.insertUser(role_id, username, firstname, lastname, telephone, email, password);
      response.status(201).json({ id: result.insertId });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating user.");
    }
  }

  static async updateUser(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    const { role_id, username, firstname, lastname, telephone, email, password } = request.body;
    try {
      await Users.updateUser(id, role_id, username, firstname, lastname, telephone, email, password);
      response.status(200).send("User updated successfully.");
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating user.");
    }
  }

  static async deleteUser(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    try {
      await Users.deleteUser(id);
      response.status(200).send("User deleted successfully.");
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting user.");
    }
  }

  static async getUserById(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    try {
      const user = await Users.getUserById(id);
      response.status(200).json(user);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting user by ID.");
    }
  }

  static async getUsersByRole(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { roleId } = request.params;
    try {
      const usersByRole = await Users.getUsersByRole(roleId);
      response.status(200).json(usersByRole);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting users by role.");
    }
  }
}

export { UsersController };
