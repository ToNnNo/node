console.log("----- Timeout -----");
setTimeout( () => {
    console.log('hello timeout');
}, 1500);

// setInterval & clearInterval

console.log("Hello", "World");

let name = "Stéphane", other = "John";
console.log("Hello %s, and %s", name, other);

console.log("__filename: %s ", __filename);
console.log("__dirname: %s ", __dirname);

let i = 1;
console.log('let i = %d', i);

let user = { name: "John", lastname: "Doe", age: 30 };
console.log( 'user = %o', user);
