// Play here and move things to their own folder once complete
console.log('First');


Promise.resolve('ta-da!')                                   // Shorthand convenience function to resolve immediately
    .then(function step2(result) {
            console.log('Step 2 received ' + result);
            return 'Greetings from step 2';                 // Explicit return value
        }
    )
    .then(function step3(result) {
            console.log('Step 3 received ' + result);       // No explicit return value
        }
    )
    .then(function step4(result) {
            console.log('Step 4 received ' + result);
            return Promise.resolve('fulfilled value');      // Return a promise
        }
    )
    .then(function step5(result) {
            console.log('Step 5 received ' + result);
            console.log('Last');

        }
    );

console.log('Second');


// The use of named functions as callbacks is a bit confusing here
// but it is so that we can more easily see which step is being executed