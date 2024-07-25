# Documentation de l'API

## Introduction

Cette API fournit des fonctionnalités pour la gestion des utilisateurs, des mots du jour, des événements, des sermons, des mémoires, des séries, des galeries, des experts, et des messages. Elle utilise Express.js et est sécurisée avec des validations, une authentification API Key, et des middlewares pour assurer la performance et la sécurité.

## Structure des Routes

### Base URL

http://localhost:<PORT>

Remplacez `<PORT>` par le port sur lequel votre serveur écoute (défini dans `.env`).

## Routes et Méthodes

### Users

- **GET /users**

  - Description: Récupère tous les utilisateurs.
  - Réponse: `200 OK` avec un tableau d'objets représentant les utilisateurs.

- **GET /users/:id**

  - Description: Récupère un utilisateur par ID.
  - Paramètres URL: `id` (numérique)
  - Réponse: `200 OK` avec un objet représentant l'utilisateur.

- **POST /users**

  - Description: Ajoute un nouvel utilisateur.
  - Corps de la requête:
    ```json
    {
      "role_id": "numérique",
      "username": "string",
      "firstname": "string",
      "lastname": "string",
      "telephone": "string",
      "email": "string"
    }
    ```
  - Réponse: `201 Created` avec l'ID du nouvel utilisateur.

- **PUT /users/:id**

  - Description: Met à jour les informations d'un utilisateur.
  - Paramètres URL: `id` (numérique)
  - Corps de la requête:
    ```json
    {
      "role_id": "numérique",
      "username": "string",
      "firstname": "string",
      "lastname": "string",
      "telephone": "string",
      "email": "string"
    }
    ```
  - Réponse: `200 OK` avec un message de succès.

- **DELETE /users/:id**
  - Description: Supprime un utilisateur.
  - Paramètres URL: `id` (numérique)
  - Réponse: `200 OK` avec un message de succès.

### WordsOfTheDay

- **GET /wordsOfTheDay**

  - Description: Récupère tous les mots du jour.
  - Réponse: `200 OK` avec un tableau d'objets représentant les mots du jour.

- **GET /wordsOfTheDay/:id**

  - Description: Récupère un mot du jour par ID.
  - Paramètres URL: `id` (numérique)
  - Réponse: `200 OK` avec un objet représentant le mot du jour.

- **POST /wordsOfTheDay**

  - Description: Ajoute un nouveau mot du jour.
  - Corps de la requête:
    ```json
    {
      "user_id": "numérique",
      "word_en": "string",
      "word_fr": "string",
      "bible_quote_en": "string",
      "bible_quote_fr": "string",
      "ref_bible_quote_en": "string",
      "ref_bible_quote_fr": "string",
      "quote_en": "string",
      "quote_fr": "string",
      "quote_ref_en": "string",
      "quote_ref_fr": "string",
      "quote_author": "string",
      "date": "date"
    }
    ```
  - Réponse: `201 Created` avec l'ID du nouveau mot du jour.

- **PUT /wordsOfTheDay/:id**

  - Description: Met à jour les informations d'un mot du jour.
  - Paramètres URL: `id` (numérique)
  - Corps de la requête:
    ```json
    {
      "user_id": "numérique",
      "word_en": "string",
      "word_fr": "string",
      "bible_quote_en": "string",
      "bible_quote_fr": "string",
      "ref_bible_quote_en": "string",
      "ref_bible_quote_fr": "string",
      "quote_en": "string",
      "quote_fr": "string",
      "quote_ref_en": "string",
      "quote_ref_fr": "string",
      "quote_author": "string",
      "date": "date"
    }
    ```
  - Réponse: `200 OK` avec un message de succès.

- **DELETE /wordsOfTheDay/:id**
  - Description: Supprime un mot du jour.
  - Paramètres URL: `id` (numérique)
  - Réponse: `200 OK` avec un message de succès.

### Events

- **GET /events**

  - Description: Récupère tous les événements.
  - Réponse: `200 OK` avec un tableau d'objets représentant les événements.

- **GET /events/:id**

  - Description: Récupère un événement par ID.
  - Paramètres URL: `id` (numérique)
  - Réponse: `200 OK` avec un objet représentant l'événement.

- **POST /events**

  - Description: Ajoute un nouvel événement.
  - Corps de la requête:
    ```json
    {
      "user_id": "numérique",
      "title_en": "string",
      "title_fr": "string",
      "date_event": "date",
      "hour_begin": "time",
      "hour_end": "time",
      "address": "string",
      "date": "date"
    }
    ```
  - Réponse: `201 Created` avec l'ID du nouvel événement.

- **PUT /events/:id**

  - Description: Met à jour les informations d'un événement.
  - Paramètres URL: `id` (numérique)
  - Corps de la requête:
    ```json
    {
      "user_id": "numérique",
      "title_en": "string",
      "title_fr": "string",
      "date_event": "date",
      "hour_begin": "time",
      "hour_end": "time",
      "address": "string",
      "date": "date"
    }
    ```
  - Réponse: `200 OK` avec un message de succès.

- **DELETE /events/:id**
  - Description: Supprime un événement.
  - Paramètres URL: `id` (numérique)
  - Réponse: `200 OK` avec un message de succès.

### Sermons

- **GET /sermons**

  - Description: Récupère tous les sermons.
  - Réponse: `200 OK` avec un tableau d'objets représentant les sermons.

- **GET /sermons/:id**

  - Description: Récupère un sermon par ID.
  - Paramètres URL: `id` (numérique)
  - Réponse: `200 OK` avec un objet représentant le sermon.

- **POST /sermons**

  - Description: Ajoute un nouveau sermon.
  - Corps de la requête:
    ```json
    {
      "user_id": "numérique",
      "day": "numérique",
      "month": "numérique",
      "location": "string",
      "date_sermon": "date",
      "title_en": "string",
      "title_fr": "string",
      "duration": "time",
      "date": "date"
    }
    ```
  - Réponse: `201 Created` avec l'ID du nouveau sermon.

- **PUT /sermons/:id**

  - Description: Met à jour les informations d'un sermon.
  - Paramètres URL: `id` (numérique)
  - Corps de la requête:
    ```json
    {
      "user_id": "numérique",
      "day": "numérique",
      "month": "numérique",
      "location": "string",
      "date_sermon": "date",
      "title_en": "string",
      "title_fr": "string",
      "duration": "time",
      "date": "date"
    }
    ```
  - Réponse: `200 OK` avec un message de succès.

- **DELETE /sermons/:id**
  - Description: Supprime un sermon.
  - Paramètres URL: `id` (numérique)
  - Réponse: `200 OK` avec un message de succès.

### Memories

- **GET /memories**

  - Description: Récupère tous les souvenirs.
  - Réponse: `200 OK` avec un tableau d'objets représentant les souvenirs.

- **GET /memories/:id**

  - Description: Récupère un souvenir par ID.
  - Paramètres URL: `id` (numérique)
  - Réponse: `200 OK` avec un objet représentant le souvenir.

- **POST /memories**

  - Description: Ajoute un nouveau souvenir.
  - Corps de la requête:
    ```json
    {
      "title": "string",
      "description": "string",
      "date": "date",
      "location": "string",
      "image_url": "string"
    }
    ```
  - Réponse: `201 Created` avec l'ID du nouveau souvenir.

- **PUT /memories/:id**

  - Description: Met à jour les informations d'un souvenir.
  - Paramètres URL: `id` (numérique)
  - Corps de la requête:
    ```json
    {
      "title": "string",
      "description": "string",
      "date": "date",
      "location": "string",
      "image_url": "string"
    }
    ```
  - Réponse: `200 OK` avec un message de succès.

- **DELETE /memories/:id**
  - Description: Supprime un souvenir.
  - Paramètres URL: `id` (numérique)
  - Réponse: `200 OK` avec un message de succès.

### Series

- **GET /series**

  - Description: Récupère toutes les séries.
  - Réponse: `200 OK` avec un tableau d'objets représentant les séries.

- **GET /series/:id**

  - Description: Récupère une série par ID.
  - Paramètres URL: `id` (numérique)
  - Réponse: `200 OK` avec un objet représentant la série.

- **POST /series**

  - Description: Ajoute une nouvelle série.
  - Corps de la requête:
    ```json
    {
      "title": "string",
      "description": "string",
      "date": "date",
      "image_url": "string"
    }
    ```
  - Réponse: `201 Created` avec l'ID de la nouvelle série.

- **PUT /series/:id**

  - Description: Met à jour les informations d'une série.
  - Paramètres URL: `id` (numérique)
  - Corps de la requête:
    ```json
    {
      "title": "string",
      "description": "string",
      "date": "date",
      "image_url": "string"
    }
    ```
  - Réponse: `200 OK` avec un message de succès.

- **DELETE /series/:id**
  - Description: Supprime une série.
  - Paramètres URL: `id` (numérique)
  - Réponse: `200 OK` avec un message de succès.

### Gallery

- **GET /gallery**

  - Description: Récupère toutes les images de la galerie.
  - Réponse: `200 OK` avec un tableau d'objets représentant les images de la galerie.

- **GET /gallery/:id**

  - Description: Récupère une image de la galerie par ID.
  - Paramètres URL: `id` (numérique)
  - Réponse: `200 OK` avec un objet représentant l'image.

- **POST /gallery**

  - Description: Ajoute une nouvelle image à la galerie.
  - Corps de la requête:
    ```json
    {
      "title": "string",
      "image_url": "string",
      "description": "string"
    }
    ```
  - Réponse: `201 Created` avec l'ID de la nouvelle image.

- **PUT /gallery/:id**

  - Description: Met à jour les informations d'une image de la galerie.
  - Paramètres URL: `id` (numérique)
  - Corps de la requête:
    ```json
    {
      "title": "string",
      "image_url": "string",
      "description": "string"
    }
    ```
  - Réponse: `200 OK` avec un message de succès.

- **DELETE /gallery/:id**
  - Description: Supprime une image de la galerie.
  - Paramètres URL: `id` (numérique)
  - Réponse: `200 OK` avec un message de succès.

### Experts

- **GET /experts**

  - Description: Récupère tous les experts.
  - Réponse: `200 OK` avec un tableau d'objets représentant les experts.

- **GET /experts/:id**

  - Description: Récupère un expert par ID.
  - Paramètres URL: `id` (numérique)
  - Réponse: `200 OK` avec un objet représentant l'expert.

- **POST /experts**

  - Description: Ajoute un nouvel expert.
  - Corps de la requête:
    ```json
    {
      "name": "string",
      "specialization": "string",
      "contact_info": "string"
    }
    ```
  - Réponse: `201 Created` avec l'ID du nouvel expert.

- **PUT /experts/:id**

  - Description: Met à jour les informations d'un expert.
  - Paramètres URL: `id` (numérique)
  - Corps de la requête:
    ```json
    {
      "name": "string",
      "specialization": "string",
      "contact_info": "string"
    }
    ```
  - Réponse: `200 OK` avec un message de succès.

- **DELETE /experts/:id**
  - Description: Supprime un expert.
  - Paramètres URL: `id` (numérique)
  - Réponse: `200 OK` avec un message de succès.

### Messages

- **GET /messages**

  - Description: Récupère tous les messages.
  - Réponse: `200 OK` avec un tableau d'objets représentant les messages.

- **GET /messages/:id**

  - Description: Récupère un message par ID.
  - Paramètres URL: `id` (numérique)
  - Réponse: `200 OK` avec un objet représentant le message.

- **POST /messages**

  - Description: Ajoute un nouveau message.
  - Corps de la requête:
    ```json
    {
      "title": "string",
      "content": "string",
      "author_id": "numérique",
      "date": "date"
    }
    ```
  - Réponse: `201 Created` avec l'ID du nouveau message.

- **PUT /messages/:id**

  - Description: Met à jour les informations d'un message.
  - Paramètres URL: `id` (numérique)
  - Corps de la requête:
    ```json
    {
      "title": "string",
      "content": "string",
      "author_id": "numérique",
      "date": "date"
    }
    ```
  - Réponse: `200 OK` avec un message de succès.

- **DELETE /messages/:id**
  - Description: Supprime un message.
  - Paramètres URL: `id` (numérique)
  - Réponse: `200 OK` avec un message de succès.

## Authentification

L'API utilise deux types d'authentification :

1. **API Key** : Utilisez une clé API dans les en-têtes des requêtes pour accéder aux endpoints.
2. **Token JWT** : Certains endpoints nécessitent une authentification JWT pour accéder aux ressources protégées.

## Limitations de Taux

Les requêtes à l'API sont limitées pour éviter les abus. Assurez-vous de respecter les limites définies dans la configuration de votre serveur.

## Exemple de Requête

Voici un exemple de requête POST pour ajouter un type d'employé :

```bash
curl -X POST http://localhost:<PORT>/typeEmployes \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <YOUR_JWT_TOKEN>" \
-d '{
  "nom": "Développeur",
  "description": "Responsable du développement logiciel"
}'
```
