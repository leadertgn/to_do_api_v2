# 🚀 TO DO API V2 – Backend (Node.js / Express / MongoDB)
![Badge Licence](https://img.shields.io/badge/License-MIT-blue.svg)
![Badge Statut](https://img.shields.io/badge/Statut-Commit%202%20-%20Base%20Backend%20Op%C3%A9rationnelle-green)
> Deuxième étape de construction du backend : mise en place des controllers, des services, et du gestionnaire global des erreurs asynchrones.
> Toute la logique métier du registre utilisateur est désormais déplacée dans `authService.js`, conformément aux bonnes pratiques d'architecture.
---
## 🎯 1. Objectifs du Commit 2
Ce commit consolide la base du backend en introduisant :
- La séparation **controllers / services**
- Le déplacement de la logique `register` dans `authService.js`
- L'ajout du gestionnaire global d'opérations asynchrones
- Une organisation plus professionnelle et scalable
- La préparation du système d'authentification complet avec codes HTTP corrects
---
## 📦 2. Nouveautés du Commit 2
### 🔁 1. Mise en place du `asyncHandler`
Le backend utilise désormais un système global pour gérer les fonctions asynchrones. 
Cela permet :
- d'éviter la répétition de blocs `try/catch`,
- de standardiser la gestion d'erreurs,
- de faciliter le futur middleware d'erreur.
Ce gestionnaire est centralisé dans `utils/`.
### 🧠 2. Déplacement de la logique `register` dans `authService.js`
Toute la logique métier de l'inscription utilisateur est gérée par un **service dédié**, conformément aux bonnes pratiques :
- séparation claire des responsabilités (controller vs service),
- code plus lisible, testable et évolutif,
- préparation de la future logique d'authentification (vérification email, login, JWT).
Le controller devient minimal, le service contient la logique.
### 🎛️ 3. Controllers simplifiés
Les controllers ont désormais un rôle clair :
- recevoir la requête,
- transmettre au service,
- renvoyer la réponse.
Ils ne contiennent plus de logique métier.
### 📡 4. Politique des Codes HTTP
- Toutes les réponses côté serveur renvoient désormais des **codes HTTP corrects** (`200`, `400`, etc.)
- Les détails de l'erreur sont inclus dans l'objet JSON (`error.status`, `error.message`)
- Cela prépare le projet à une API professionnelle conforme aux standards REST
---
## 🏗️ 3. Architecture Mise à Jour

```src/
├──config/        # Connexion et configurations
├──controllers/   # Reçoit la requête, délègue aux services
├──middlewares/   # Auth, validation, gestion des erreurs
├──models/        # Schémas Mongoose
├──routes/        # Définition des routes de l'API
├──services/      # Logique métier (dont authService.js)
├──utils/         # asyncHandler, helpers...
├──app.js         # Configuration Express
└──server.js      # Point d'entrée du serveur ```
---
## 📡 4. Routes Disponibles

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/v1/health` | Vérifie l'état du serveur et la connexion DB |
| POST | `/api/v1/auth/register` | Inscription utilisateur + génération code vérification |

### Exemple de réponse (POST `/api/v1/auth/register`)

```json
{
  "success": true,
  "data": {
    "username": "nouvel_utilisateur",
    "email": "email@example.com",
    "emailCode": 1234
  },
  "message": "Utilisateur créé avec succès"
}```
---
🧭 5. Roadmap (prochaines étapes)
🔐 Phase 3 – Authentification
· Finalisation complète du système d'inscription
· Vérification email
· Connexion + génération de tokens JWT
· Middleware de protection des routes
🗂️ Phase 4 – CRUD des Tâches
· Création
· Lecture paginée
· Mise à jour
· Suppression
---
👨‍💻 6. Auteur
TOGNON EMERIC R. S.
Développeur Backend (MERN) et systèmes embarqués & Étudiant en génie électrique et informatique
Passionné par le développement logiciel robuste et structuré.
Ce fichier README correspond au Commit 2, dédié à l'introduction des services, des controllers structurés et de la gestion asynchrone, ainsi qu'à la route d'inscription utilisateur.
