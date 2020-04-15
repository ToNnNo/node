const EventEmitter = require('events');
const emitter = new EventEmitter();

function getNumber() {
    let randTime = Math.floor(Math.random() * 5000 + 1000);
    let randError = Math.floor(Math.random() * 3 + 1);

    let TimeObject = { time: randTime };

    // Listener / subscriber
    emitter.emit('randTime', TimeObject);
    emitter.emit('randError', (randError === 1), randError);

    console.log(TimeObject);

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            (randError > 1) ? resolve([1, 2, 3, 4, 5]) : reject(new Error('Server indisponible'));

        }, TimeObject.time);

    });

}

// then( callback ); la signature de la callback    => (data: any):void => {}
// console.log(); la signature de console.log       => (data: any): void => {}
// console.error(); la signature de console.error   => (data: any): void => {}

emitter.on('randTime', (obj) => {
    console.log('Latence: %d', obj.time);

    if (obj.time > 2000) {
        obj.time = 2000;
        console.log('New Latence: %d', obj.time);
    }
});

emitter.on('randError', (error, number) => {
    console.log('Error: %s (number: %d)', error, number);
});

getNumber().then(console.log).catch(console.error);

