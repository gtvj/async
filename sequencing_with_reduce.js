const do_stuff = require('./lib/do_stuff');

// Build a sequential chain of promises from the elements in an array
function sequence(array, callback) {
    return array.reduce(function (promise, item) {
        return promise.then(function () {
            return callback(item);
        });
    }, Promise.resolve());
}

const things = ['Thing one', 'Thing two', 'Horton'];

sequence(things, function (thing) {
    return do_stuff(thing).then(function (info) {
        console.log(info)
    });
}).catch(function (reason) {
    console.log(reason);
});
