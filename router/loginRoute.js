import { Router } from "express";
import { LoginController } from "../controller/loginController.js";
import LoginValide from "../validation/loginValide.js";

const routerLogin = Router();

// Récupérer toutes les notes internes
routerLogin.get("/", LoginController.connect);

export default routerLogin;
