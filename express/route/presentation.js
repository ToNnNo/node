const router = require('express').Router();

router.get('/', (req, res) => {
    /*let html = `<!doctype html>
<html lang="fr">
<head>
<title>Accueil</title>
<link rel="stylesheet" href="/css/style.css" />
</head>
<body>
<h1>Bienvenue sur notre projet Express</h1>
<img src="/images/batman.jpg" alt="batman" />
</body>
</html>`;

    res.send(html);*/

    let message = '<b>Hello World</b>';

    res.render('home/home.html', { message }); // es6 => { variable } = { nom_variable: valeur_variable }
});

router.get('/about', (req, res) => {

    let user = { firstname: 'John', lastname: 'Doe', age: 30 };

    res.json(user);
});

router.get('/user', (req, res) => {
    let user = null;

    err = new Error('Not Found');
    err.status = 404;

    throw err;
});

router.get('/error', (req, res, next) => {
    let err = new Error('Error');
    err.status = 500;
    throw err;
});

module.exports = router;
