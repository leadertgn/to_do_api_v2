// 1. Import nécéssaires packages
import { configDotenv } from "dotenv";

// 2. Importation de l'application et de la connexion à mongo
import app from "./src/app.js";
import connectDB from "./src/config/db.js"

// 2. Charger les variables d'environnement
configDotenv();

// 3. Connexion à MongoDb + démarrage du serveur
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
   app.listen(PORT, () => {
      console.log(`🚀 Serveur démarré sur le port ${PORT}`);
      console.log(`Adresse : http://localhost:${PORT}`)
      console.log(`📊 Environnement: ${process.env.NODE_ENV}`);
   });
});




