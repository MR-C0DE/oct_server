import "dotenv/config";
import express, { json, urlencoded } from "express";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import morgan from "morgan";

import logger from "./configuration/logger.js";



import AuthUtils from "./configuration/auth.js";
import routerLogin from "./router/loginRoute.js";
import limiter from "./configuration/rateLimitConfig.js";




// Création du serveur
const app = express();

// Ajout de middlewares
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));




app.use(limiter); // Appliquer les limites de taux d'appels

// Configuration de Morgan pour le logging des requêtes HTTP
app.use(morgan("combined", { stream: logger.stream }));

app.use(AuthUtils.authenticateApiKey)

// Ajouter des routes

app.use("/api/login", routerLogin);


// Démarrage du serveur
app.listen(process.env.PORT);
