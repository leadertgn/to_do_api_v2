# 🚀 TO DO API V2 – Backend (Node.js / Express / MongoDB)

![Badge Licence](https://img.shields.io/badge/License-MIT-blue.svg)
![Badge Statut](https://img.shields.io/badge/Statut-Initialisation%20Termin%C3%A9e-green.svg)

> Un backend professionnel, robuste et évolutif, conçu pour une application de gestion de tâches complète avec authentification sécurisée. Ce projet sert de **démonstration de compétences avancées en MERN Stack**.

## 🎯 1. Objectifs du Projet

Ce projet a été développé pour servir de base à une application de gestion de tâches personnelle, en mettant l’accent sur les meilleures pratiques de développement backend :

* Construire une **API backend robuste et scalable**.
* Implémenter une **architecture professionnelle** (controllers, services, models…).
* Intégrer une **authentification sécurisée** (JWT, vérification d’email).
* Proposer un **CRUD complet** pour la gestion des tâches.
* Servir de **projet portfolio** pour démontrer les compétences backend MERN stack.

## 📦 2. Technologies Utilisées

Ce projet utilise l’écosystème Node.js et les outils modernes suivants :

| Catégorie           | Technologies                 | Description                                                   |
| ------------------- | ---------------------------- | ------------------------------------------------------------- |
| **Frameworks**      | Node.js, Express.js          | Environnement d'exécution et framework minimaliste pour l'API |
| **Base de Données** | MongoDB, Mongoose            | Base NoSQL et ODM pour la modélisation                        |
| **Développement**   | Nodemon, Morgan              | Redémarrage auto & logging HTTP                               |
| **Qualité**         | ESLint, Prettier (optionnel) | Qualité et cohérence du code                                  |
| **Sécurité**        | dotenv, CORS                 | Variables d'environnement & politique de partage              |

## 🏗️ 3. Architecture du Projet

L’API utilise une **architecture par couches**, afin d’améliorer la modularité, les tests et la maintenabilité long terme :
src/
├── config/             # Connexion DB & configurations
├── controllers/        # Gestion des requêtes et réponses
├── middlewares/        # Auth, validations, gestion des erreurs
├── models/             # Schémas Mongoose
├── routes/             # Endpoints et association aux controllers
├── services/           # Logique métier (cœur du backend)
├── utils/              # Fonctions utilitaires
├── app.js              # Configuration Express
└── server.js           # Lancement du serveur

## ⚙️ 4. Installation & Configuration

### 🔧 Prérequis

* Node.js (version LTS recommandée)
* npm
* MongoDB (local ou MongoDB Atlas)

### 📝 1. Cloner le projet

```bash
git clone <url-du-repo>
cd to_do_api_v2
```

### 📥 2. Installer les dépendances

```bash
npm install
```

### 🔐 3. Variables d’Environnement

Créer un fichier **.env** à la racine :

```env
# Configuration du serveur
PORT=5000

# Connexion MongoDB
MONGO_URI=your_mongo_connection_string

# Sécurité JWT
JWT_SECRET=your_jwt_secret_key

# Configuration Email (vérification)
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
EMAIL_VERIFICATION_EXPIRATION=10
```

## ▶️ 5. Lancer le Projet

### 💻 Mode Développement (Nodemon)

```bash
npm run dev
```

### 🏭 Mode Production

```bash
npm start
```

## 📡 6. Documentation des Routes

### ✔️ Route opérationnelle actuellement disponible

| Méthode | Endpoint       | Description                                  |
| ------- | -------------- | -------------------------------------------- |
| GET     | /api/v1/health | Vérifie l’état du serveur et la connexion DB |

#### Exemple de réponse (GET `/api/v1/health`)

```json
{
  "message": "Bienvenu sur la version 1 de l'api. Le service est opérationnel.",
  "status": "OK"
}
```

## 📌 Fonctionnalités Prévues (Roadmap)

### 🔐 Authentification

| Méthode | Endpoint              | Description                      |
| ------- | --------------------- | -------------------------------- |
| POST    | /api/v1/auth/register | Inscription + vérification email |
| POST    | /api/v1/auth/login    | Connexion & génération JWT       |

### 🗂️ Gestion des Tâches

| Méthode | Endpoint             | Description              |
| ------- | -------------------- | ------------------------ |
| POST    | /api/v1/tasks        | Création d’une tâche     |
| GET     | /api/v1/tasks?page=1 | Liste paginée des tâches |
| PUT     | /api/v1/tasks/:id    | Mise à jour d’une tâche  |
| DELETE  | /api/v1/tasks/:id    | Suppression d’une tâche  |

## 📘 7. À Propos du Développement

Le projet suit une approche professionnelle :

* Architecture claire : **services / controllers**
* Commits structurés étape par étape
* Documentation continue
* Base évolutive vers une application MERN complète

## 👨‍💻 8. Auteur

**TOGNON EMERIC**
**Rôle :** Développeur Backend / Étudiant MERN Stack
**Objectif :** Apprentissage & consolidation des bonnes pratiques backend

> Ce fichier README représente le **Commit 1**, dédié à la mise en place de l’environnement technique initial.
