import { Roles } from "../model/roles.js"; // Assurez-vous que ce chemin est correct
import Validation from "../validation/validation.js";

class RolesController {
  static async getRoles(request, response) {
    try {
      const roles = await Roles.selectRoles();
      response.status(200).json(roles);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting roles.");
    }
  }

  static async createRole(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { name, description } = request.body;
    try {
      const result = await Roles.insertRole(name, description);
      response.status(201).json({ id: result.insertId });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating role.");
    }
  }

  static async updateRole(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    const { name, description } = request.body;
    try {
      await Roles.updateRole(id, name, description);
      response.status(200).send("Role updated successfully.");
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating role.");
    }
  }

  static async deleteRole(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    try {
      await Roles.deleteRole(id);
      response.status(200).send("Role deleted successfully.");
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting role.");
    }
  }

  static async getRoleById(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    try {
      const role = await Roles.getRoleById(id);
      response.status(200).json(role);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting role by ID.");
    }
  }

  static async getUsersWithRole(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { roleId } = request.params;
    try {
      const usersWithRole = await Roles.getUsersWithRole(roleId);
      response.status(200).json(usersWithRole);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting users with role.");
    }
  }
}

export { RolesController };
