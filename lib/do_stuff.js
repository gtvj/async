let do_stuff = (arg) => {
    let promise = new Promise((resolve) => {

        let delay = Math.floor(Math.random() * 1000); // Up to a second
        console.log(`Asked to do stuff with ${arg}`);

        setTimeout(function () {
            let response = `Done stuff with ${arg}`;
            resolve(response)
        }, delay)
    });
    return promise;
};

module.exports = do_stuff;