let mock_ajax = () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ 'name': 'Pokemon', 'subscribedToSpam': true })
        }, 3000);
    });

    return promise;
};

module.exports = mock_ajax;