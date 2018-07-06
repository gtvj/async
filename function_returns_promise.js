let do_stuff_for = function (person) {

    let promise = new Promise(function (resolve, reject) {

        // Do some stuff
        // ...
        // ...we'll assume all went well

        resolve(`Hey ${person}, I've done that stuff you asked for`)
    });

    return promise;
};

do_stuff_for('Bob').then(function (result) {
    console.log(result);
});

