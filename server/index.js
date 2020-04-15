const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs').promises;
const bodyParser = require('co-body');
const mime = require('mime-types');

const template = require('./module/template');

const server = http.createServer();

const mimeType = {
    ".css": "text/css",
    ".pdf": "application/pdf",
    ".jpg": "image/jpeg"
};

const translate = {
    'en': 'About me',
    'fr': 'A propos de moi',
    'de': 'Über mich'
};

const router = require('find-my-way')({
    defaultRoute: async (request, response) => {
        const page = url.parse(request.url).pathname;
        const resource = path.join(__dirname, page);
        const ext = path.extname(resource);

        try {
            let content = await fs.readFile(resource);

            // response.setHeader('Content-Type', mimeType[ext] || 'text/plain');
            response.setHeader('Content-Type', mime.lookup(ext) || 'text/plain');
            response.end(content);
        } catch (e) {
            template._404(request, response);
        }
    }
});

router.get('/', (req, res) => {
    let title = 'Bienvenue sur notre premier serveur Node !';
    let body = '<p>Découvrez notre projet de serveur nodejs réalisé avec le module http.</p>';

    res.end(template.page({ title, body }));
});

router.on('GET', '/about', (req, res) => {
    // let title = (null != url.parse(req.url, true).query.title) ? url.parse(req.url, true).query.title : 'About me';
    // let title = url.parse(req.url, true).query.title || 'About me';

    const lang = url.parse(req.url, true).query.lang || 'en';

    let title = translate[lang];

    let body = '';
    body += `<nav style="margin-top: 10px">
        <a href="?lang=fr">Français</a> - 
        <a href="?lang=de">Allemand</a> - 
        <a href="?lang=en">Anglais</a> 
    </nav>`;
    body += '<p><img src="/public/images/batman.jpg" alt="batman" /></p>';
    body += '<p>Voir le document <a href="/public/pdf/interdiction.pdf" target="_blank">pdf</a></p>';

    res.end(template.page({ title, body }));
});

router.get('/user/:id', (req, res, params) => {
    let users = ['John', 'Jane', 'William', 'Jack', 'Marie', 'Elisabeth'];

    if (!(username = users[params.id - 1])) {
        template._404(req, res);
    }

    let title = 'Utilisateur';
    let body = `<p>Hello ${username}</p>`;

    res.end(template.page({ title, body }));
});

router.on(['GET', 'POST'], '/formulaire', async (req, res) => {

    let message = '';
    if('POST' === req.method) {
        let post = await bodyParser(req);

        message = `Bonjour ${post.name}`;
    }
    let title = 'Formulaire';
    let body = `
<p>${message}</p>
<form method="post" action="">
    <p>
        <label>Name: </label>
        <input type="text" name="name" value="" placeholder="Enter your name" />
    </p>
    <p>
        <input type="submit" name="envoyer" value="Envoyer" />
    </p>
</form>`;

    res.end(template.page({ title, body }));
});

server.on('request', async (request, response) => {

    const page = url.parse(request.url).pathname;
    console.log('New Request Catch: %s (%s)', page, request.url);

    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    await router.lookup(request, response);

    /*switch(page) {
        case "/":
            response.end(template.page('<h1>Bienvenue sur notre premier serveur Node !</h1>'));
            break;
        case "/about":
            let body = '';
            body += '<h1>About me</h1>';
            body += '<p><img src="/public/images/batman.jpg" alt="batman" /></p>';
            body += '<p>Voir le document <a href="/public/pdf/eval.pdf" target="_blank">pdf</a></p>';
            response.end(template.page(body));
            break;
        default:
            try {
                const resource = path.join(__dirname, page);
                const ext = path.extname(resource);
                let content = await fs.readFile(resource);

                response.setHeader('Content-Type', mimeType[ext] || 'text/plain');
                response.end(content);
            }catch (e) {
                template._404(request, response);
            }

    }*/

});

const port = process.env.PORT || 3000;
server.listen(port);
console.log(`Personal Node Server is listening on http://localhost:${port}`);
console.log('Shutdown Node Server with CRTL + C');
