import "dotenv/config";
import express, { json, urlencoded } from "express";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import morgan from "morgan";

import logger from "./configuration/logger.js";

import limiter from "./configuration/rateLimitConfig.js";

import AuthUtils from "./configuration/auth.js";




import routerUsers from "./router/usersRoute.js";
import routerWordsOfTheDay from "./router/wordsOfTheDayRoute.js";
import routerEvents from "./router/eventsRoute.js";
import routerSermons from "./router/sermonsRoute.js";
import routerMemories from "./router/memoriesRoute.js";
import routerSeries from "./router/seriesRoute.js";
import routerGallery from "./router/galleryRoute.js";
import routerExperts from "./router/expertsRoute.js";
import routerMessages from "./router/messagesRoute.js";

import routerLogin from "./router/loginRoute.js";

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
app.use("/api/users", AuthUtils.authenticateToken, routerUsers);
app.use("/api/wordsOfTheDay", AuthUtils.authenticateToken, routerWordsOfTheDay);
app.use("/api/events", AuthUtils.authenticateToken, routerEvents);
app.use("/api/sermons", AuthUtils.authenticateToken, routerSermons);
app.use("/api/memories", AuthUtils.authenticateToken, routerMemories);
app.use("/api/series", AuthUtils.authenticateToken, routerSeries);
app.use("/api/gallery", AuthUtils.authenticateToken, routerGallery);
app.use("/api/experts", AuthUtils.authenticateToken, routerExperts);
app.use("/api/messages", AuthUtils.authenticateToken, routerMessages);

app.use("/api/login", routerLogin);


// Démarrage du serveur
app.listen(process.env.PORT);
