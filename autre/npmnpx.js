const cowsay = require('cowsay');

console.log(cowsay.say({
    text: `I'm a module`,
    e: '0o',
    T: 'U '
}));

console.log(cowsay.say({
    text: `404 - Not Found`,
    f: 'c3po'
}));
