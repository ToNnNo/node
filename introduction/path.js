const path = require('path');

let path_file = './assets/content/hello.txt';

console.log('dirname(): %s', path.dirname(path_file));
console.log('basename(): %s', path.basename(path_file));
console.log('extname(): %s', path.extname(path_file));

console.log('Separateur système: %s', path.sep);

// le répertoire assets/ se trouve dans le répertoire introduction/
console.log('Chemin relatif vers image.png: %s', path.join('assets', 'images', 'image.png'));
console.log('Chemin absolue vers image.png: %s', path.join(__dirname, 'assets', 'images', 'image.png'));
console.log('Chemin relatif vers le répertoire images: %s', path.join('assets', 'images', path.sep));

// le répertoire assets/ se trouve dans le répertoire node/ (racine)
console.log('Chemin relatif vers image.png: %s', path.join('..', 'assets', 'images', 'image.png'));
console.log('Chemin absolue vers image.png: %s', path.join(__dirname, '..', 'assets', 'images', 'image.png'));

console.log(path.resolve(__dirname, path.join('..', 'assets', 'images', 'image.png')));

console.log(path.resolve(__dirname, '../assets', './images'));

let origin = path.join('./', 'assets', 'files');
let dest = path.join('assets', 'images', 'image.png');

/**
 * https://gist.github.com/abritinthebay/d80eb99b2726c83feb0d97eab95206c4
 * \x1b[32m --> vert
 * \x1b[0m  --> default
 * \x1b[31m --> rouge
 * \x1b[1m  --> bras
 */

console.log("Pour passer du répertoire \x1b\[32m%s\x1b\[0m au répertoire \x1b\[32m%s\x1b\[0m, je dois faire \x1b[1m\x1b\[31m%s\x1b\[0m",
    origin, dest, path.relative(origin, dest));
