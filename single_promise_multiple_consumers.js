const mock_ajax = require('./lib/mock_ajax');

const user = {
    profilePromise: null,

    getProfile() {
        if (!this.profilePromise) {
            // Assume ajax() returns a promise that is eventually
            // fulfilled with {name: 'Samantha', subscribedToSpam: true}
            this.profilePromise = mock_ajax(/*someurl*/);
        }
        return this.profilePromise;
    }
};

const navbar = {
    show(user) {
        user.getProfile().then(profile => {
            console.log('*** Navbar ***');
            console.log('Name: ' + profile.name);
        });
    }
};

const account = {
    show(user) {
        user.getProfile().then(profile => {
            console.log('*** Account Info ***');
            console.log('Name: ' + profile.name);
            console.log('Send lots of email? ' + profile.subscribedToSpam);
        });
    }
};

navbar.show(user);
account.show(user);
