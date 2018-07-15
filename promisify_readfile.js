const fs = require('fs');

/**
 * read_file_promise 'promisifys' the callback-based fs.readfile.
 * This allows us to work with readFile without having to enter
 * callback hell.
 * */

const read_file_promise = (filename) => {
    return new Promise(function (resolve, reject) {
        fs.readFile(`dummy_content/${filename}`, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data)
            }
        })
    });
};

let text = '';

read_file_promise('one.txt')
    .then(result => {
        text = result;
        return read_file_promise('two.txt')
    })
    .then(result => {
        text += result;
        return read_file_promise('three.txt')
    })
    .then(result => {
        text += result;
        console.log(text);
    })
    .catch(err => {
        console.log(`Error ${err}`);

    });