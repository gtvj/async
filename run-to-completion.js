// An example of the run to completion rule
// This might not behave as you'd expect!

setTimeout(() => {
    console.log('polo');
}, 0);

let timestamp = Date.now() + 3000;

while (Date.now() < timestamp) {
    // Do nowt
}

console.log('Marco');

