const express = require('express');
const path = require('path');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const routePresentation = require('./route/presentation');
const routeLivre = require('./route/livre');
const routeApi = require('./route/api');

const bdd = require('./config/db');
const Livre = require('./entity/Livre');

const app = express();
const env = require('nunjucks').configure( path.join(__dirname, 'template'), {
    autoescape: true,
    express: app
});

env.addFilter('date', require("nunjucks-date"));

// middleware
app.use(helmet());
app.use( async (req, res, next) => {

    console.log('Request: %s', req.url);

    try {
        await bdd.authenticate();
        console.log('Connexion établi avec succès.');
    }catch (e) {
        console.log('Erreur de connexion: %s', e.message);
    }

    next();
});
app.use( async (req, res, next) => {
    // create table
    await Livre.sync();
    next();
});
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());                             // api -> content-type: application/json
app.use(bodyParser.urlencoded({ extended: false }));    // formulaire html -> content-type: application/x-www-form-urlencoded

// routes
app.use(routePresentation);
app.use(routeLivre);
app.use('/api', routeApi);

app.use( (err, req, res, next) => {
    if( err ) {
        console.log(err);
        res.status(err.status).send(`<p>${err.message}</p>`);
        return;
    }
    next();
});
app.use( (req, res, next) => {
    res.status(404).send('<p>Not Found</p>');
});

const port = process.env.PORT || 3200;
const server = app.listen(port, 'localhost', () => {
    console.log(`Personal Node Server is listening on http://localhost:${port}`);
    console.log('Shutdown Node Server with CRTL + C');
});

// npm run start:express
// changer le port sous windows
//      set PORT=9999   --> CMD
//      $env:PORT=9999  --> PowerShell
//      nodemon express/index.js
// changer le port sous unix
//      PORT=9999 nodemon express/index.js
