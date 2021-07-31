const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const routes = require('./controller');

// Inititalize Express
const app = express();
const PORT = process.env.PORT || 3000;

// Set up for Handlebars.js enging
const hbs = exphbs.create();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Serve static files from the public folder
app.use("/", express.static(path.join(__dirname, "public")));

// Use HTML routes from controller folder
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server running on port #${PORT}`)
})