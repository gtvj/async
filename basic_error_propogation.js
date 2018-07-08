my_func('Fiddlesticks')
    .then(function (value) {
        console.log('I will never run');

    })
    .then(function (value) {
        console.log('I will never run either');

    })
    .catch(function (err) {
        console.log(err);

    });

function my_func(word) {

    let prom = new Promise(function (resolve, reject) {
        throw Error(`It's all gone wrong! You used ${word} which is wrong.`);
    });

    return prom;
}

// This code demonstrates how promises propagate through promise chains