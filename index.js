

require('dotenv').config();

// Import des dépendances tierses
const express = require('express');
const path = require('path');
// Import des dépendances locales
const router = require ('./app/router');

// Create Express app
const app = express();
// Configure static
app.use(express.static(path.join(__dirname, 'public')));

// Configure view engine
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'app/views'));

// Configure routes
app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur OK, lancé sur http://localhost:${port} `);
});

module.exports = app











// AVANT DEPLOY





// require('dotenv').config();

// // Import des dépendances tierses
// const express = require('express');
// // Import des dépendances locales
// const router = require ('./app/router');

// // Create Express app
// const app = express();
// // Configure static
// app.use(express.static('./public'));


// // Configure view engine
// app.set('view engine','ejs');
// app.set('views','./app/views');


// // Configure routes
// app.use(router);





// const port = process.env.PORT || 4000
// const host = '0.0.0.0';
// app.listen(port, host, () => {
//   console.log('Serveur OK, lancé sur http://localhost:4000 ');
// });
