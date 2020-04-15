// npm i @babel/cli @babel/core @babel/node @babel/preset-env --save-dev

/** Module NPM **/

const Useful = require('./class/Useful');

let useful = new Useful('Stéphane');

console.log(`Hello ${useful.getName()}`);

/** End Module NPM (Node) **/

/** Module ESM **/

import Useless from "./class/Useless.js";
import path from "path";

console.log(`Useless.nothing = ${Useless.nothing()}`);

console.log(`Extension de file.txt = ${path.extname('file.txt')}`);

/** End Module ESM **/
