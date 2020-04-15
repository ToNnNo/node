
const fs = require('fs');
const path = require('path');

const pathfile = path.join(__dirname, 'assets', 'content', 'hello.txt');
const content = "Hello World\r\nNouvelle ligne à écrire dans mon fichier!\r\nL'écriture sera t elle toujours plus rapide ?\r\n";

/**
 * Chez Node, les callbacks recoivent en premier paramètres les erreurs !
 * Le paramètre err est une instance de Error
 */

// callback hell
fs.mkdir(path.dirname(pathfile), { recursive: true }, (err) => {

    if(err){ // environnement en échec
        throw err;
    }

    // environnement en réussite

    console.log('Les répertoires %s ont bien été créés', path.relative( __dirname, path.dirname(pathfile)));

    fs.writeFile(pathfile, content, { flag: 'a' }, (err) => {
        if(err){
            throw err;
        }

        console.log('Le fichier %s a bien été créé', path.basename(pathfile));

        fs.readFile(pathfile, (err, content) => {
            if(err){
                throw err;
            }

            console.log('File content: %s', content);
        });
    });
});


const copy = path.join(__dirname, 'assets', 'content', 'copy.txt');
const rename = path.join(__dirname, 'assets', 'content', 'rename.txt');

fs.copyFile(pathfile, copy, (err) => {

    if(err){
        throw err;
    }

    console.log('Le fichier a été dupliqué');

    fs.rename(copy, rename, (err) => {
        console.log('Le fichier a été renommé');

        // suppression
        fs.unlink(rename, (err) => {
            if(err){
                throw err;
            }

            console.log('Le fichier %s a été supprimé', path.relative( __dirname, rename));
        });
    });
});
