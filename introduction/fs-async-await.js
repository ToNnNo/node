const fs = require('fs').promises;
const path = require('path');

const pathfile = path.join(__dirname, 'assets', 'async', 'hello.txt');
const content = "Hello async await\r\n";

(async () => {

    try {
        await fs.mkdir(path.dirname(pathfile), {recursive: true});
        console.log('Les répertoires %s ont bien été créés', path.relative(__dirname, path.dirname(pathfile)));

        await fs.writeFile(pathfile, content, {flag: 'a'});
        console.log('Le fichier %s a bien été créé', path.basename(pathfile));

        let contentFile = await fs.readFile(pathfile);
        console.log(contentFile.toString());
    } catch (e) {
        console.error(e.message);
    }

})();
