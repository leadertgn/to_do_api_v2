// 1. Importation nécéssaires de package
import express from "express";
import cors from "cors";
import morgan from "morgan";

// Importation des routeurs de versions
import routes from "./routes/index.js";

// 2. Création de l'instance Express 
const app = express();

// --- Middlewares au niveau de l'application --- 
app.use(morgan("dev")) // morgan 
app.use(cors()) // cors
app.use(express.json()); // Json parser 
app.use(express.urlencoded({ extended:true })); // URL-encoded Parser
// COnfiguration des Headers par défaut (Sécurité et Cache) 
app.use((req,res,next) => {
    // Empêche le navigateur de mettre en cache les reponses de l'API
    res.setHeader('Cache-Control','no-store, no-cache, must-revalidate, proxy-revalidate');
    // Sécurité Empêche le type MIME sniffing
    res.setHeader('X-Content-Type-Options','nosniff');
    // Sécurité Empêche le clickjacking
    res.setHeader('X-Frame-Options','DENY');
    // Passer au middleware ou route suivant 
    next();
});

// 3. Attachement des Routeurs de version
app.use('/api/v1',routes.v1Routes); // Version 1

// 4. Gestion des Erreurs ---

// 404 - Resssource non trouvée 
app.use((req,res,next) => {
    const error = new Error(`Ressource non trouvée pour l'URL: ${req.originalUrl}`);
    error.status = 404;
    next(error);
});

// Gestionnaire d'erreurs général
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
            success:false,
            error: {
                message: error.message || 'Erreur interne du serveur',
                status: error.status || 500
            }
    });
});

export default app;