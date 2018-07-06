// The simplest example of a promise

let prom = new Promise((resolve, reject) => {
    resolve(400); // Could also have an alternative execution path which calls reject();
});

prom.then(result => {
    console.log(result * 100);
});
