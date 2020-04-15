const url = require('url');

// js natif
const myUrl = new URL('https://user:pass@www.dawan.fr:8080/node.html?page=1#plan');

console.log(myUrl);
console.log(myUrl.toString(), String(myUrl));

let options = {
    auth: false,
    fragment: false,
    search: false
};

const newUrl = url.format(myUrl, options);
console.log( String( newUrl ));

//https://nodejs.org/dist/latest-v13.x/docs/api/url.html#url_url_strings_and_url_objects
