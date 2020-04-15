const fs = require('fs').promises;
const path = require('path');
const util = require('util'); // promisify

/*const readFile = util.promisify(fs.readFile);
const mkdir = util.promisify(fs.mkdir);
const writeFile = util.promisify(fs.writeFile);*/

const pathfile = path.join(__dirname, 'assets', 'utils', 'hello.txt');
const content = 'Hello Promisify';

// callback hell
fs.mkdir(path.dirname(pathfile), { recursive: true }).then(() => {

    console.log('Les répertoires %s ont bien été créés', path.relative( __dirname, path.dirname(pathfile)));

    fs.writeFile(pathfile, content, { flag: 'a' }).then(() => {

        console.log('Le fichier %s a bien été créé', path.basename(pathfile));

        fs.readFile(pathfile).then( content => {
            // content: Buffer
            console.log('File content: %s', content);

            // console.log( content.toString() );
            //console.log(String(content));
        });

    });

});
