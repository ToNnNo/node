// async est un raccourci vers les promesses
// avec le mot clé return la promesse est en réussite.
async function success() {
    return 'Bravo !';
}

// avec le mot clé throw la promesse est en échec
async function fail() {
    throw new Error('dommage ...');
}

success().then(console.log);
fail().catch(console.error);

function getAsyncNumber() {
    const randTime = Math.floor(Math.random() * 5000 + 1000);
    const randValue = Math.floor(Math.random() * 10);

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(randValue);
        }, randTime)
    });
}

console.log('Appel de Addition');

/*async function addition() {
    const x = await getAsyncNumber();
    const y = await getAsyncNumber();

    console.log(`${x} + ${y} = ${x + y}`);
}*/

// addition();

( async () => {


    try {
        const x = await getAsyncNumber();
        const y = await getAsyncNumber();

        console.log(`${x} + ${y} = ${x + y}`);

        await fail();
    } catch(e) {
        console.error('Error (fail): %s', e.message);
    }
})();

console.log('maintenant on attends');
