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

template.page = (body) => {
let html = `<!doctype html>
<html lang="fr">
    <head>
        <title>Server</title>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="/public/css/style.css" />
    </head>
    <body>
        ${body}
    </body>
</html>`;

return html;
};

module.exports = template;
