console.log(`I'm first, obviously`);

let promise = new Promise(function (resolve, reject) {
    console.log(`I'm second - but you might not expect that`); // 'resolvers' are executed synchronously
    resolve('Hello, world!')
});

console.log(`I'm third`);

promise.then(function (value) {
    console.log(`And I'm last to say '${value}'`);

});

console.log(`I'm fourth`);

// With a basic understanding of the 'run to completion' rule and the JS 'event loop', you might be surprised by
// the order these console logs take place. Fear not! It can be understood with the knowledge that:
//  - the 'resolver' function (i.e. the function passed to the Promise constructor) is executed 'synchronously'
//  - all functions passed to then() and catch() blocks are executed 'asynchronously'