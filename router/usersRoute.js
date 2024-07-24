import { Router } from "express";
import { UsersController } from "../controller/usersController.js";
import UsersValide from "../validation/usersValide.js";

const routerUsers = Router();

// Récupérer tous les utilisateurs
routerUsers.get("/", UsersController.getUsers);

// Récupérer un utilisateur par ID
routerUsers.get("/:id", UsersValide.id("id"), UsersController.getUserById);

// Ajouter un nouvel utilisateur
routerUsers.post("/", UsersValide.createUser(), UsersController.createUser);

// Mettre à jour les informations d'un utilisateur
routerUsers.put("/:id", UsersValide.updateUser(), UsersController.updateUser);

// Supprimer un utilisateur
routerUsers.delete("/:id", UsersValide.id("id"), UsersController.deleteUser);

// Récupérer les utilisateurs par rôle
routerUsers.get("/roles/:roleId", UsersValide.id("roleId"), UsersController.getUsersByRole);

export default routerUsers;
