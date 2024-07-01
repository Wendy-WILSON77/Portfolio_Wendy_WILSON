// Import des dépendances tierses
const express = require('express');
// Import des dépendances locales
const router = require ('./app/router');

// Create Express app
const app = express();
// Configure static
app.use(express.static('./public'));


// Configure view engine
app.set('view engine','ejs');
app.set('views','./app/views');


// Configure routes
app.use(router);







const port = 3000
app.listen(port, () => {
  console.log('Serveur OK');
});
