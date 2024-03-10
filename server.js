const express = require("express");
const app = express();
const path = require('path');
// Charger les routes
const productRoutes = require('./routes/productRoutes');
const port = 8080;
const $ = require('jquery'); // Importer jQuery

// Middleware pour gérer le body de la requête
app.use(express.urlencoded({ extended: true }));

// Définir le moteur de modèle EJS
app.set('view engine', 'ejs');
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));



// Routes pour les produits
app.use('/products', productRoutes);


// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});