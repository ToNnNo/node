const cowsay = require('cowsay');

const template = {};

template._404 = (request, response) => {
    response.statusCode = 404;
    response.write('<h1>404 - Not Found</h1><hr />');
    const content = cowsay.say({
        text: 'Moh ??',
        e: 'Oo',
        r: true
    });
    response.write(`<pre>${content}</pre>`);
    response.end();
};

template.page = (param) => {
let html = `<!doctype html>
<html lang="fr">
    <head>
        <title>${param.title}</title>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="/public/css/style.css" />
    </head>
    <body>
        <header>
            <h1>${param.title}</h1>
            <hr />
        </header>
        <nav>
            <a href="/">Accueil</a> - 
            <a href="/about">A propos</a> - 
            <a href="/user/1">Utilisateur</a> - 
            <a href="/formulaire">Formulaire</a>
        </nav>
        <section>
            ${param.body}
        </section>
        <footer>
            <hr />
            <p class="text-center">Formation NodeJS - Dawan FOAD - Avril 2020</p>
        </footer>
    </body>
</html>`;

return html;
};

module.exports = template;
