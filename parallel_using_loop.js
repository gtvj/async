const do_stuff = require('./lib/do_stuff');

const things = ['Apples', 'Pears', 'Jelly'];

things.forEach(thing => {
    do_stuff(thing).then(function (result) {
        console.log(result);
    })
});

